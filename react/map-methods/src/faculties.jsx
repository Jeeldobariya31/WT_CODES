import { useState } from 'react';

export default function Faculties() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showData, setShowData] = useState(false);

  const facultyData = [
    {
      id: 1,
      name: "Dr. Sarah Williams",
      department: "Computer Science",
      position: "Associate Professor",
      email: "sarah.williams@university.edu",
      phone: "+1 (555) 123-4567",
      office: "Building A, Room 201",
      experience: "8 years",
      specialization: "Artificial Intelligence"
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      department: "Mathematics",
      position: "Full Professor",
      email: "michael.rodriguez@university.edu",
      phone: "+1 (555) 234-5678",
      office: "Building B, Room 305",
      experience: "15 years",
      specialization: "Number Theory"
    },
    {
      id: 3,
      name: "Dr. Jennifer Kim",
      department: "Physics",
      position: "Assistant Professor",
      email: "jennifer.kim@university.edu",
      phone: "+1 (555) 345-6789",
      office: "Building C, Room 102",
      experience: "5 years",
      specialization: "Quantum Mechanics"
    },
    {
      id: 4,
      name: "Prof. Robert Johnson",
      department: "Engineering",
      position: "Full Professor",
      email: "robert.johnson@university.edu",
      phone: "+1 (555) 456-7890",
      office: "Building D, Room 401",
      experience: "12 years",
      specialization: "Mechanical Engineering"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      department: "Biology",
      position: "Associate Professor",
      email: "lisa.thompson@university.edu",
      phone: "+1 (555) 567-8901",
      office: "Building E, Room 203",
      experience: "10 years",
      specialization: "Molecular Biology"
    },
    {
      id: 6,
      name: "Prof. David Chen",
      department: "Chemistry",
      position: "Full Professor",
      email: "david.chen@university.edu",
      phone: "+1 (555) 678-9012",
      office: "Building F, Room 306",
      experience: "18 years",
      specialization: "Organic Chemistry"
    },
    {
      id: 7,
      name: "Dr. Amanda Garcia",
      department: "Psychology",
      position: "Assistant Professor",
      email: "amanda.garcia@university.edu",
      phone: "+1 (555) 789-0123",
      office: "Building G, Room 104",
      experience: "6 years",
      specialization: "Clinical Psychology"
    },
    {
      id: 8,
      name: "Prof. James Wilson",
      department: "Economics",
      position: "Associate Professor",
      email: "james.wilson@university.edu",
      phone: "+1 (555) 890-1234",
      office: "Building H, Room 205",
      experience: "9 years",
      specialization: "Macroeconomics"
    },
    {
      id: 9,
      name: "Dr. Maria Martinez",
      department: "Art History",
      position: "Assistant Professor",
      email: "maria.martinez@university.edu",
      phone: "+1 (555) 901-2345",
      office: "Building I, Room 107",
      experience: "4 years",
      specialization: "Renaissance Art"
    },
    {
      id: 10,
      name: "Prof. Thomas Brown",
      department: "Political Science",
      position: "Full Professor",
      email: "thomas.brown@university.edu",
      phone: "+1 (555) 012-3456",
      office: "Building J, Room 308",
      experience: "20 years",
      specialization: "International Relations"
    }
  ];

  const loadFaculties = async () => {
    setLoading(true);
    setError("");
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFaculties(facultyData);
      setShowData(true);
    } catch (err) {
      setError("Failed to load faculties data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="faculties-section">
      <h1>👨‍🏫 FACULTIES MANAGEMENT SYSTEM</h1>
      <p className="section-description">
        Click the button below to load and display all faculty records with their professional information.
      </p>
      
      <button onClick={loadFaculties} disabled={loading}>
        {loading ? "Loading Faculties..." : "Load Faculties Data"}
      </button>

      <div className="faculties-grid">
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading faculties data...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {!loading && !error && showData && faculties.map((faculty) => (
          <div key={faculty.id} className="faculty-card">
            <div className="faculty-avatar">
              {faculty.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3>{faculty.name}</h3>
            <p><strong>Department:</strong> {faculty.department}</p>
            <p><strong>Position:</strong> <span className="position">{faculty.position}</span></p>
            <p><strong>Experience:</strong> {faculty.experience}</p>
            <p><strong>Specialization:</strong> {faculty.specialization}</p>
            <p><strong>Office:</strong> {faculty.office}</p>
            <p><strong>Email:</strong> {faculty.email}</p>
            <p><strong>Phone:</strong> {faculty.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
