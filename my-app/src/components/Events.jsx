import React from 'react'
import image1 from '../assets/event1.jpg'
import image2 from '../assets/event2.jpg'
import image3 from '../assets/event3.jpg'




const Events = () => {
    return (
      
        <body>
    <div name='events' 
      class="bg-gray-900 grid-cols-3 h-screen flex justify-center items-center gap-x-16 text-white"
    >
      <div
        class="w-[300px] h-[420px] grid-item bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={image1} class="w-full h-full" alt='eventimage'/>
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#FF847C] overflow-hidden"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">Event Title</h1>
              <p class="my-2">Event Date</p>
              <p>
                Short description of Event
              </p>
              <button
                class="text-black rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-[300px] h-[420px] grid-item bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={image2} class="w-full h-full" alt='eventimage'/>
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#FF847C] overflow-hidden"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">Event Title</h1>
              <p class="my-2">Event Date</p>
              <p>
                Short description of Event
              </p>
              <button
                class="text-black rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-[300px] h-[420px] grid-item bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={image3} class="w-full h-full" alt='eventimage'/>
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#FF847C] overflow-hidden"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">Event Title</h1>
              <p class="my-2">Event Date</p>
              <p>
                Short description of Event
              </p>
              <button
                class="text-black rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
    )
}

export default Events