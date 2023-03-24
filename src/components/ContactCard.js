import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {Button,Card} from "react-bootstrap";
import types from "../store/actionTypes";

const {ADD_TO_FAVOURITES} = types

const ContactCard = ({ id,isFavoutites, name, phone, email }) => {
  const dispatch = useDispatch()

  const addToFavourites = ()=>{
    dispatch({type:ADD_TO_FAVOURITES,payload:{id}})
  }

  return (
    <Card className="text-start">
        <Card.Body>
          <Card.Title className='fw-bold'>{name}</Card.Title>
          <Card.Text>
            <span className='d-block '>Phone : {phone}</span>
            <span className='d-block '>Email : {email}</span>
          </Card.Text>
        </Card.Body>

        {!isFavoutites && 
        <Card.Footer className='d-flex justify-content-end'>
        <Link to="edit" state={id} className="text-decoration-none">
          <Button variant="outline-primary" className="me-2">
            Edit
          </Button>
        </Link>
        <Button variant="outline-success" onClick={addToFavourites}>Favourite</Button>
        </Card.Footer>
        }
      </Card>
  )
}

export default ContactCard