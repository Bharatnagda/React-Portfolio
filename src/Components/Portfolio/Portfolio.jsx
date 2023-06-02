import React from 'react'
import './Portfolio.css'
import Movie from '../../img/movie-app.png'
import aakash from '../../img/aakash.png'
import workolics from '../../img/workolics.png'
import weather from '../../img/weather app.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
const Portfolio = () => {
  return (
   <div className="portfolio" id='Portfolio'>
    {/* heading */}
    <span>Recent Project</span>
    <span>Portfolio</span>
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      grabCursor={true}
   
      className='portfolio-slider'
    >
      <SwiperSlide>
        <img src={Movie} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={aakash} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={workolics} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Movie} alt="" />
      </SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Portfolio