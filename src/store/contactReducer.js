import { contacts } from "../data"
import types from "./actionTypes"


  let initialContacts = contacts;

  // get the contacts from localStorage
  if (localStorage.getItem("contacts")) {
    initialContacts = JSON.parse(localStorage.getItem("contacts"));
  }

  const initialState = {
    contacts: initialContacts,
    contactToEdit:null
  };

  const {ADD_CONTACT, ADD_TO_FAVOURITES,EDIT_CONTACT} = types

 const contactReducer = (state = initialState,action)=>{
    const {type,payload} = action

    if (type ===ADD_CONTACT) {
        const newContactList = [...state.contacts,payload.newContact]
        localStorage.setItem("contacts", JSON.stringify(newContactList))
        return {...state, contacts: newContactList}

    } else if(type ===ADD_TO_FAVOURITES){
        state.contacts.find(contact=>contact.id === payload.id).favourite = true
        localStorage.setItem("contacts", JSON.stringify(state.contacts))
        return{...state,contacts:state.contacts}

    } else if(type ===EDIT_CONTACT){
        const {id,editedContact} = payload

        const contactToEdit = state.contacts.find(contact=>contact.id === id)
        const index = state.contacts.indexOf(contactToEdit)
        state.contacts.splice(index,1,editedContact)

        localStorage.setItem("contacts", JSON.stringify(state.contacts))
        return {...state,contacts:state.contacts}
    } 
    return state
}

export default contactReducer