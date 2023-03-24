import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Button,Form } from 'react-bootstrap';
import types from "../store/actionTypes"

const {EDIT_CONTACT} = types

const Edit = () => {
  const [info,setInfo]= useState({
    id:"",
    name:"",
    phone:"",
    email:"",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const contactId = location.state

  // get the specifc contact
  const contacts = useSelector(state=>state.contacts)
  const contactToEdit = contacts.find(contact=>contact.id === contactId)
  const {id,name,phone,email,favourite} = contactToEdit
  
  // update contact info
  useEffect(()=>setInfo({
    id,
    name,
    phone,
    email,
  }),[id,name,phone,email])
 

  const handleSave = (e)=>{
    e.preventDefault()
    const editedContact = favourite ? {...info,favourite}: {...info}
    dispatch({type:EDIT_CONTACT,payload:{id,editedContact}})
    navigate("/")
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    setInfo(prev=>({...prev,[name]:value}))
  }


  return (
    <div className='app'>
      <h2 className='mb-5'>Edit Contact</h2>
      <Form className='text-start card p-4 edit-form'>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your name" type="text" name="name" value={info.name} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control placeholder="Enter your phone number" type='tel' name="phone" value={info.phone} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Enter your email" type="email" name="email" value={info.email} onChange={handleChange}/>
      </Form.Group>
    <div className='d-flex justify-content-end'>
      <Button type="submit" variant="success" onClick={handleSave}>Save</Button>
    </div>
    </Form>
    
      
    </div>
  );
}

export default Edit