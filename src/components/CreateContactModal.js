import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import types from "../store/actionTypes"

const {ADD_CONTACT} = types

const CreateContactModal = (props) => {
  const dispatch = useDispatch()
  const [info,setInfo] = useState({
    name:"",
    phone:"",
    email:""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setInfo(prev=>({...prev,[name]:value}))
  }

  const addNewContact = (e)=>{
    e.preventDefault()
    if(info.name && info.phone && info.email){
      const id = new Date().getTime()
      const newContact = {id,...info,favourite:false}
      
      dispatch({type:ADD_CONTACT,payload:{newContact}})
      setInfo(
        {
          name:"",
          phone:"",
          email:""
        }
        )
  
        props.onHide()
      }else{
        props.setError(true)
      }
    }



  return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      Create new contact
      </Modal.Title>
    </Modal.Header>
    <Form onSubmit={addNewContact}>
    <Modal.Body>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your name" type="text" name="name" value={info.name}  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control placeholder="Enter your phone number" type="tel" name="phone" value={info.phone} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Enter your email" type="email" name="email" value={info.email} onChange={handleChange}/>
      </Form.Group>
      {props.error && <p className='text-danger'>All fields are required</p>}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={addNewContact} variant="success" type='submit'>Create Contact</Button>
    </Modal.Footer>
    </Form>
  </Modal>
  )
}

export default CreateContactModal