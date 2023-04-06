import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'



const Banner = () => {
  return (
    <div className=' relative'>
        <div className=' absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}>
            <div>
                <img loading=' lazy' src='./img/amazon1.jpg' alt='am'/>
            </div>
            <div>
                         <img loading=' lazy' src='./img/amazon2.jpg' alt='am'/>
            </div>
            <div>
                      <img loading=' lazy' src='./img/amazon3.jpg' alt='am'/>
            </div>
            <div>
                     <img loading=' lazy' src='./img/amazon4.jpg' alt='am'/>
            </div>
            <div>
                       <img loading=' lazy' src='./img/amazon5.jpg' alt='am'/>
            </div>
          </Carousel>
          

    </div>
  )
}

export default Banner