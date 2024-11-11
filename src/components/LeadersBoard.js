import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pro from './images/image.png';

const LeadersBoard = () => {
  const [students, setStudents] = useState([]); // Correct initialization of state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://192.168.1.10:5000/api/students');
        
        // Sort students by score in descending order
        const sortedStudents = response.data.sort((a, b) => b.score - a.score);
        
        setStudents(sortedStudents); // Assign data correctly
        setLoading(false);
        setError(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
        setError(true);
      }
    };

    fetchStudents();
  }, []);

  // Early return if error occurs during fetching
  if (error) return null;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Leaders Board</h1>
      
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {/* Display Top 3 Students Separately */}
          <div className="row mb-4">
            {students.slice(0, 3).map((student, index) => (
              <div key={student._id} className="col-4 text-center">
                <div className={`p-3 rounded ${index === 0 ? 'bg-warning' : index === 1 ? 'bg-secondary' : 'bg-bronze'}`}>
                  <img 
                    src={pro} 
                    alt={`${student.name}`} 
                    className="rounded-circle mb-2" 
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h3>{student.name}</h3>
                  <p>{student.score} points</p>
                  <span>{index === 0 ? 'Gold' : index === 1 ? 'Silver' : 'Bronze'} Medal</span>
                </div>
              </div>
            ))}
          </div>

          {/* Display Full Leaderboard Table */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
              <thead className="table-primary text-center">
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Name</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={student._id}
                    className={index === 0 ? 'table-warning' : index === 1 ? 'table-secondary' : index === 2 ? 'table-bronze' : 'table-light'}
                  >
                    <th scope="row" className="text-center">{index + 1}</th>
                    <td className="d-flex align-items-center">
                      {student.name}
                    </td>
                    <td className="text-center">{student.score} points</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default LeadersBoard;
