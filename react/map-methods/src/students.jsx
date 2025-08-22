import { useState } from 'react';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showData, setShowData] = useState(false);

  const studentData = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 20,
      grade: "A",
      major: "Computer Science",
      email: "alice.johnson@university.edu",
      gpa: 3.8,
      year: "Sophomore"
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 22,
      grade: "B+",
      major: "Mathematics",
      email: "bob.smith@university.edu",
      gpa: 3.5,
      year: "Senior"
    },
    {
      id: 3,
      name: "Carol Davis",
      age: 19,
      grade: "A-",
      major: "Physics",
      email: "carol.davis@university.edu",
      gpa: 3.7,
      year: "Freshman"
    },
    {
      id: 4,
      name: "David Wilson",
      age: 21,
      grade: "B",
      major: "Engineering",
      email: "david.wilson@university.edu",
      gpa: 3.2,
      year: "Junior"
    },
    {
      id: 5,
      name: "Emma Brown",
      age: 20,
      grade: "A+",
      major: "Biology",
      email: "emma.brown@university.edu",
      gpa: 3.9,
      year: "Sophomore"
    },
    {
      id: 6,
      name: "Frank Miller",
      age: 23,
      grade: "B-",
      major: "Chemistry",
      email: "frank.miller@university.edu",
      gpa: 2.9,
      year: "Senior"
    },
    {
      id: 7,
      name: "Grace Lee",
      age: 18,
      grade: "A",
      major: "Psychology",
      email: "grace.lee@university.edu",
      gpa: 3.6,
      year: "Freshman"
    },
    {
      id: 8,
      name: "Henry Taylor",
      age: 21,
      grade: "B+",
      major: "Economics",
      email: "henry.taylor@university.edu",
      gpa: 3.4,
      year: "Junior"
    },
    {
      id: 9,
      name: "Ivy Chen",
      age: 20,
      grade: "A-",
      major: "Art History",
      email: "ivy.chen@university.edu",
      gpa: 3.7,
      year: "Sophomore"
    },
    {
      id: 10,
      name: "Jack Anderson",
      age: 22,
      grade: "B",
      major: "Political Science",
      email: "jack.anderson@university.edu",
      gpa: 3.1,
      year: "Senior"
    }
  ];

  const loadStudents = async () => {
    setLoading(true);
    setError("");
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStudents(studentData);
      setShowData(true);
    } catch (err) {
      setError("Failed to load students data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="students-section">
      <h1>🎓 STUDENTS MANAGEMENT SYSTEM</h1>
      <p className="section-description">
        Click the button below to load and display all student records with their academic information.
      </p>
      
      <button onClick={loadStudents} disabled={loading}>
        {loading ? "Loading Students..." : "Load Students Data"}
      </button>

      <div className="students-grid">
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading students data...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {!loading && !error && showData && students.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-avatar">
              {student.name.charAt(0)}
            </div>
            <h3>{student.name}</h3>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Major:</strong> {student.major}</p>
            <p><strong>Grade:</strong> <span className={`grade grade-${student.grade}`}>{student.grade}</span></p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong>Year:</strong> {student.year}</p>
            <p><strong>Email:</strong> {student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
