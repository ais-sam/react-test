import { useSelector } from 'react-redux';
import ContactsGrid from '../components/ContactsGrid';


const Favourites = () => {
  const favourites = useSelector(state=>{
    return state.contacts.filter(contact=>contact.favourite)
  })


  return (
    <div className='app'>
    <h2 className='mb-5'>Favourites</h2>
    {favourites.length > 0 ?
    <ContactsGrid contacts={favourites} isFavoutites={true}/>
    :
    <p>No Favourite contacts... </p>
  }
    </div>
  )
}

export default Favourites