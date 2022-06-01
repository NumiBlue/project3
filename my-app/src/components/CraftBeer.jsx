import React from 'react'

const CraftBeer = () => {
  return (
    <div>
        <div name='craftbeer' className='w-full md:h-screen  bg-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#99B898] border-[#E84A5F]'>Craft Beer</p>
                <p> After a long day of music festivals, wandering through the Green Belt, or a rough day at the office, it's a good time to check out Austin's reknowned local brewery scene. Austin has a long history of musing up some of the most unusual, innovative, and satisfying brews in the world. Served in a quirky pub, a relaxed outdoor lounge, a high-luxury speak-easy, or during an intense board-gaming session, these libations really hit the spot.</p>
                <p className='py-6 text-[#E84A5F]'>text</p>
           </div>
        </div>
        </div>
    </div>
  )
}

export default CraftBeer