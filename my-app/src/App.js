import React from 'react';
import  Navbar  from "./components/Navbar";
import Hero  from "./components/Hero";
import  Events   from "./components/Events";
import  Weather from "./components/Weather";
import  Footer  from "./components/Footer";
import FormSignup from './components/FormSignup';
import Login from './components/Login'
import CraftBeer from './components/CraftBeer';
import FarmToTable from './components/FarmToTable';
import FarmersMarkets from './components/FarmersMarkets';
import PetFriendly from './components/PetFriendly';
import LGBTQowned from './components/LGBTQowned';
import TacoTrucks from './components/TacoTrucks';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import FormSuccess from './components/FormSuccess';



function App () {

  return (
<>
    <div>
      <Navbar />
      <Hero />
      <Weather />
      <Events />
      <Footer />
    </div>

    <div className=''>
      <FormSignup />
      <Login />
      <FormSuccess />
      <CraftBeer />
      <FarmToTable />
      <FarmersMarkets />
      <PetFriendly />
      <LGBTQowned />
      <TacoTrucks />
      <Article1 />
      <Article2 />
      <Article3 />
    </div>
  </>
  
  );
}

export default App;
