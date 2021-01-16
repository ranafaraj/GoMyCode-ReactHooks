import React from "react";
import {Navbar, Nav, FormControl, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import AddMovie from "../AddMovie/AddMovie";
function navbar(props)
{
   
   const handleChange = (e) => {
    props.setSearchInput(e.target.value)
   }
   const ratingChanged = (newRating) => {
    props.setSsearchRating(newRating)
  };
  
  return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">My movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <AddMovie setNewMovie ={props.setNewMovie} setfirstRender={props.setfirstRender}/>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange= {handleChange} />
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
      
    </Form>
  </Navbar>
  )
      
  
}

export default navbar;