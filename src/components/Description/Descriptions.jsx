import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Descriptions.css";

function Descriptions(movieData) {
  
  console.log(movieData)
  return (
    <div id ="description">
      
      <iframe title="myFrame" width="560" height="315"
       src={movieData.trailerUrl} frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
      <h4>{movieData.description}</h4>

      <Link to = "/">
        <Button variant = "warning">
          go back 
        </Button>
      </Link>   
    </div>
   
  )
}




export default Descriptions;