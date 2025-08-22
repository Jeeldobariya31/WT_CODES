import { useState } from 'react';

function ArrayMap() {
  const [numbers, setNumbers] = useState([]);
  const [doubled, setDoubled] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showData, setShowData] = useState(false);

  const originalNumbers = [1, 2, 3, 4, 5];

  const loadArrayData = async () => {
    console.log('Button clicked! Loading array data...');
    setLoading(true);
    setError("");
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setNumbers(originalNumbers);
      setDoubled(originalNumbers.map((num) => num * 2));
      setShowData(true);
      console.log('Array data loaded successfully!');
    } catch (err) {
      setError("Failed to load array data");
      console.error('Error loading array data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="array-map-section">
      <h1>🔢 ARRAY MAP EXAMPLE</h1>
      <p className="section-description">
        Click the button below to demonstrate JavaScript Array.map() method with original numbers and their doubled values.
      </p>
      
      <button onClick={loadArrayData} disabled={loading}>
        {loading ? "Processing..." : "Load Array Map Example"}
      </button>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Processing array data...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}

      {!loading && !error && showData && (
        <div className="array-results">
          <h2>Original Numbers</h2>
          <ul>
            {numbers.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
          <h2>Doubled Numbers</h2>
          <ul>
            {doubled.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ArrayMap;