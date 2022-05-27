import React from 'react';
import  Navbar  from "./components/Navbar";
import Hero  from "./components/Hero";
import  Events   from "./components/Events";
import  Community from "./components/Community";
import  Footer  from "./components/Footer";
import FormSignup from './components/FormSignup';
import Login from './components/Login'
import CraftBeer from './components/CraftBeer';
import FarmToTable from './components/FarmToTable';
import FarmersMarkets from './components/FarmersMarkets';
import PetFriendly from './components/PetFriendly';
import LgbtqOwned from './components/LgbtqOwned';
import TacoTrucks from './components/TacoTrucks';




function App () {

  return (
<>
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Community />
      <Footer />
    </div>

    <div className=''>
      <FormSignup />
      <Login />
      <CraftBeer />
      <FarmToTable />
      <FarmersMarkets />
      <PetFriendly />
      <LgbtqOwned />
      <TacoTrucks />
    </div>
  </>
  
  );
}

export default App;
