// IMPORT REACT
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


// ADDITIONAL IMPORTS
import { login } from "./../utilities/users-service";

// CREATE COMPONENT
const SignIn = ({ setUser }) => {
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      const user = await login({ email, password });
      // Add the user to state
      setUser(user.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form className="w-50 m-auto sign-in-form" onSubmit={(e) => {
      return handleFormSubmission(e);
    }}>
      <h4 className=" auth-headers mb-3 "> Have an Account? </h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" required
          onChange={(e) => {
            return handleInputChange(e);
          }} value={email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password"
          name="password"
          required
          onChange={(e) => {
            return handleInputChange(e);
          }}
          value={password} placeholder="Password" />
      </Form.Group>

      <Button variant="success" type="submit">
        LOG IN
      </Button>
      <p className="error-message mt-3">&nbsp;{error}</p>
    </Form>
  );


};

// EXPORT COMPONENT
export default SignIn;
