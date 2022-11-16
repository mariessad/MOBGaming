// IMPORT REACT
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// ADDITIONAL IMPORTS
import { signUp } from "../utilities/users-service";

// CREATE COMPONENT
const SignUpForm = ({ setUser }) => {
  // Create different state for the signup component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  // Assuming the passed in password is not equal to the password confirm
  const disable = password !== confirm;

  // Create a handle change method to keep track of changes inside the form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };
  // const handleErrorChange = (e) => {
  //   setError(e.target.value);
  // };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = { name, email, password, confirm, error };
    try {
      // Make a copy of our data
      const formData = { ...state };

      delete formData["confirm"];
      delete formData["error"];

      // Send the data to our backend
      const user = await signUp(formData);

      // Log the data to the console
      console.log(user);
      setUser(user.data);
    } catch (error) {
      setError("Sign Up Failed - Try Again");
    }
  };

  return (
    <Form className="w-50 m-auto sign-up-form" onSubmit={(e) => {
      return handleFormSubmission(e);
    }}>
      <h3 className="mb-3 auth-headers "> Create an Account </h3>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"
          name="name"
          onChange={(e) => {
            return handleNameChange(e);
          }}
          value={name}
          placeholder="Name"
          required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={(e) => {
            return handleEmailChange(e);
          }}
          value={email}
          required type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
          name="password"
          onChange={(e) => {
            return handlePasswordChange(e);
          }}
          value={password}
          required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirm"
          onChange={(e) => {
            return handleConfirmChange(e);
          }}
          value={confirm}
          placeholder=" Confirm Password"
          required />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={disable}>
        SIGN UP
      </Button>
    </Form>
  );


};

// EXPORT COMPONENT
export default SignUpForm;
