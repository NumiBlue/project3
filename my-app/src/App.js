import React from 'react';
import  Navbar  from "./components/Navbar";
import Hero  from "./components/Hero";
import  Events   from "./components/Events";
import  Community from "./components/Community";
import  Footer  from "./components/Footer";
import FormSignup from './components/FormSignup';
import Login from './components/Login'




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
    </div>
  </>
  
  );
}

export default App;
