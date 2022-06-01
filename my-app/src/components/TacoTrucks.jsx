import React from 'react'
import {GiTacos} from 'react-icons/gi'

const TacoTrucks = () => {
  return (
    <div>
        <div name='tacotrucks' className='w-full md:h-screen  bg-[#2A363B]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#99B898] border-[#E84A5F]'>Tacos</p>
                <p>If Texas is known for anything, it's TexMex. In a beautiful example of urban symbiosis, Austin's taco trucks display the glory that occurs when TexMex and food truck culture collide! Allow your cravings to guide you through the city in search of the perfect taco; our site will be your lodestar to the port of tasty taco goodness.</p>
                <p className='py-6 text-[#E84A5F]'>
                <GiTacos size={30} />
                <GiTacos size={30} />
                <GiTacos size={30} />
              </p>
           </div>
        </div>
        </div>
    </div>
  )
}

export default TacoTrucks