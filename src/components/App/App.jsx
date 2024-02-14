import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'
import GuestForm from '../GuestForm/GuestForm';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/api/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = () => {
    axios.post('/api/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };

  return (
    <div className="App">
      <Header title={"Prim Proper Props"} />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm addGuest={addGuest} getGuests={getGuests}/>
     
      <h2>Guest List</h2>
      <GuestList list={guestList}/>
      
      <DinnerSupplies list={guestList}/>
      <Footer title={"Have fun!"} foot={"Don't forget to mind your Ps and Qs!"}/>
    </div>
  );
}

export default App;
