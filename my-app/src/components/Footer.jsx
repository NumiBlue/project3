import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'


const Footer = () => {
    return (
      <div className='max-w-full mx-auto py-8 px-4  bg-gradient-to-r from-black to-[#2A363B]'>
        <div>
            <p className='text-[#99B898] text-center'>Did we miss something? Share it with us!</p>
            <p className='text-[#99B898] text-center'>Tag us at all your favorite spots in Austin!</p>
            <br></br>
            <p className='text-[#E84A5F] text-center font-bold text-3xl'>#EverythingLocal</p>
            <br></br>
            <div className='text-[#FF847C] place-content-center flex'>
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
    </div>
    )
}

export default Footer