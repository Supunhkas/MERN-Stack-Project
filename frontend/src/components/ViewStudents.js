import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = () => {
      axios
        .get("http://localhost:8070/student/", getStudents)
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getStudents();
  }, []);
  return (
    <div className="container">
      <h1>View all Students</h1>
      <table>
        <tr>
          <th> Name</th>
          <th> Age</th>
          <th> Gender</th>
        </tr>
        {students.map((item, i) => (
          <tr key={i}>
            <td>{item.name} </td>
            <td>{item.age} </td>
            <td>{item.gender} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ViewStudents;
