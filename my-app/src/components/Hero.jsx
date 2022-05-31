import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/mural.jpg';
import FormSignup from '../components/FormSignup';
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
    <div name='hero' className='w-full h-screen'>

        <div style={{backgroundImage: `url(${backgroundImage})`}}
        className='bg-cover flex flex-col justify-center text-center h-full'>
        <br></br>
        <br></br>
            <p className='text-[#FF847C] font-bold p-2'>Everything Local is your crunchy guide to the city of</p>
            <div className='flex justify-center items-center'>
                <div className='font-bold text-[#FF847C]'>
                <FaLocationArrow size={50} />
                </div>
                <Typed 
                className='md:text-7xl sm:text-6xl text-3xl font-bold pl-2 text-[#99B898]'
                strings={['Austin, Texas']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                 />
                 </div>
                 <h1 className='text-xl font bold md:py-6 text-center vertical-align:middle text-[#E84A5F]'>A one-stop shop for the best taco trucks, pet friendly establishments, farmers markets, farm to table restaurants, craft beer, lgbtq owned bussinesses, events around the city, and everything in between.   </h1>

                 <div>
                     <button onClick={FormSignup} className='bg w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Sign Up/Sign In</button>
                 </div>                               
            
        </div>
    </div>        
    )   
}

export default Hero

