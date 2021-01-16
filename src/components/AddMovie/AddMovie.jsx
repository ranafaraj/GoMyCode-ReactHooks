import React,{useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap';
import "./AddMovie.css" ;


function AddMovie(props) {
   
        {
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            
            const [newMovie, setNewMovie] = useState({title: "", description:"", posterUrl: "", rate:0, trailerUrl:" " })
            
            const handleChange = (e) => {
              setNewMovie({...newMovie, [e.target.name]:e.target.value})

            }

            const handleSubmit = () => {
              const {title, description, posterUrl, rate, trailerUrl } = newMovie
              if(title && description && posterUrl && rate && trailerUrl)
              { props.setNewMovie(newMovie)
                setNewMovie({title: "", description:"", posterUrl: "", rate:0, trailerUrl:" " })
                props.setfirstRender(false)
                handleClose() }

                else{alert("There is an empty field, please check again");} 
                 
            }
            return (
              <>
                <Button id="btn" variant="primary" onClick={handleShow}>
                Add Movie
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add a new movie</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                    <Form.Control text="text" placeholder="Enter movie title..." name="title" className="inputArea" onChange={handleChange} />
                    <Form.Control as="textarea" placeholder="Enter movie description..." className="inputArea" name="description" onChange={handleChange}/>
                    <Form.Control text="text" placeholder="Enter movie poster URL..." className="inputArea" name="posterUrl"  onChange={handleChange} />
                    <Form.Control text="number" placeholder="Enter movie rate..." className="inputArea" name="rate"  onChange={handleChange}/>
                    <Form.Control text="text" placeholder="Enter movie trailer URL..." className="inputArea" name="trailerUrl"  onChange={handleChange} / >
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          
          
    
}

export default AddMovie
