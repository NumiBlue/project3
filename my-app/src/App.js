import React from 'react';
import  Navbar  from "./components/Navbar";
import Hero  from "./components/Hero";
import  Events   from "./components/Events";
import  Community from "./components/Community";
import  Footer  from "./components/Footer";
import FormSignup from './components/FormSignup';
import Login from './components/Login'
import FormSuccess from './components/FormSuccess'

async function  getWeatherData(lon, lat) {

  // need to chain api calls in order to get weather png
 //const response1 = await fetch("http://api.openweathermap.org/data/2.5/weather?lat="+ String(lat) + "&lon="+ String(lon) + "&appid=35ba749d4db4fe6cbb94fc8036fea775");
 // const data1 = await response1.json();
//  const response2 = await fetch("http://api.weatherapi.com/v1/current.json?key=baafdcc671a24961b5e201219220102&q="+ data1.name + "&aqi=no");
  //const data2 = await response2.json();
 // return data2
}



//function displayLaunchSiteLinks (obj) {

  //var weatherCard = document.createElement("div");
 // var tempEL = document.createElement("h2"); 
 // var cityNameEL = document.createElement("h2"); 
  //var imageEL=document.createElement("img")


  //getWeatherData(obj.lon, obj.lat).then(weatherData => {
   // console.log(weatherData)

   // tempEL.textContent= weatherData.current.temp_f+" °F";
  //  cityNameEL.textContent = weatherData.location.name;
   // imageEL.src= "https:"+weatherData.current.condition.icon



  // weatherCard.appendChild(cityNameEL);
   // weatherCard.appendChild(tempEL);
    //weatherCard.appendChild(imageEL)


 // });


function App () {

  return (

    <div>
      <Navbar />
      <Hero />
      <Events />
      <Community />
      <Footer />
      <FormSignup />
      <Login />
      <FormSuccess />
    </div>
  
  
  );
}

export default App;
