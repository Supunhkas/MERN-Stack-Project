import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddStudents() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post("http://localhost:8070/Student/add", newStudent)
      .then(() => {
        alert("student added");
        setName("");
        setAge("");
        setGender("");
      })
      .catch((err) => {
        alert("err");
      });
  }

  return (
    <div className="container">
      <Form onSubmit={sendData}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label> Student Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label> Student Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddStudents;
