
import { useState } from 'react'
import React from 'react'
import { Link } from "react-router-dom"
import * as userService from "./../utilities/users-service";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navbar1({ user, setUser, searchGame, cart, rFoundGame }) {


  const handleLogOut = () => {
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    setUser(null);
  };
  const [formData, setFormData] = useState({
    searchTerm: ""
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    let slug = formData.searchTerm.split(' ').join('-').toLowerCase()
    //console.log(slug)
    event.preventDefault();
    searchGame(slug);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='topBar'>
      <Container fluid>
        <Link to="/games" className="navbar-brand me-5" ><span>MOB</span>Gaming </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '110px' }}
            navbarScroll>

            <Link to="/games" className="nav-link" aria-current="page" onClick={rFoundGame}> Store</Link>
            <Link to="/games/cart" className="nav-link " aria-current="page" > Cart ({cart.length})</Link>

            <span className="nav-link" > Welcome {user.newUser?.name || user.currentUser?.name} </span>
          </Nav>
          <Form className="d-flex me-3" onSubmit={handleSubmit}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" name='searchTerm' onChange={handleChange} value={formData.searchTerm} required
            />
            <Button variant="outline-success" type='submit'>Search</Button>

          </Form>
          <Link onClick={() => {
            return handleLogOut();
          }} className="nav-link ms-5" aria-current="page" > Log Out</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Navbar1