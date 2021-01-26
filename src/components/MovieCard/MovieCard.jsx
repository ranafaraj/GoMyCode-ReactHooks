import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MovieCard.css" ;

function MovieCard(props) {

   return (
  <Link  style={{textDecoration: "none"}} to={`/movies${props.movie.id}`}>
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.movie.posterUrl} className= "movieImg" />
    <Card.Body>
    <Card.Title>{props.movie.title}</Card.Title>
    <Card.Text> {props.movie.description} </Card.Text>
    <span className="rateStars"> {("⭐").repeat(props.movie.rate)}</span>
    </Card.Body>
    <Card.Footer className="cardFooter">
    <Button variant="primary" href="#">Trailer</Button>
    </Card.Footer>
   </Card>
</Link>
   )
}

export default MovieCard
