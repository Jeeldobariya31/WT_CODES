import { useState } from 'react';

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCars = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://6881be7366a7eb81224bbf08.mockapi.io/student");
      if (!response.ok) {
        throw new Error(`Failed to load data (Status: ${response.status})`);
      }
      const data = await response.json();
      setCars(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="car-list-section">
      <h1>🚗 CAR INVENTORY SYSTEM</h1>
      <p className="section-description">
        Click the button below to fetch and display car data from the API with detailed vehicle information.
      </p>
      
      <button onClick={fetchCars} disabled={loading}>
        {loading ? "Fetching Cars..." : "Load Car Data"}
      </button>

      <div className="car-grid">
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Fetching car data from API...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {!loading &&
          !error &&
          cars.map((car) => (
            <div key={car.id} className="car-card">
              <img
                src={car.img}
                alt={car.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Car+Image';
                }}
              />
              <h3>{car.name}</h3>
              <p><strong>Type:</strong> {car.type}</p>
              <p><strong>Fuel:</strong> {car.fuel}</p>
              <p><strong>Color:</strong> {car.color}</p>
              <p><strong>ID:</strong> {car.id}</p>
              <p><strong>Brand:</strong> {car.brand}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
