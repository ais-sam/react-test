import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import ContactsGrid from '../components/ContactsGrid';
import CreateContactModal from '../components/CreateContactModal';


const Home = () => {
    const contacts = useSelector(state=>state.contacts)
    const [modalShow, setModalShow] = useState(false);
    const [error,setError] = useState(false)

    const addContact = ()=>{
        setModalShow(true)
        setError(false)
    }

    const handleError =(err)=>{
      setError(err)
    }

  return (
    <div className='app'>
        <div className='top'>
            <Button variant="primary" onClick={addContact}>Add New</Button>
        </div>
        <ContactsGrid contacts={contacts}/>
        <CreateContactModal show={modalShow} error={error} setError={handleError} onHide={() => setModalShow(false)}/>
    </div>
  );
}

export default Home

