import React from 'react'
import "./testimonials.css"
import avatar1 from "../../assets/avatar1.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {

  const reviewData = [
    {
      id: 1,
      avatar: avatar1,
      name: 'Donalds James',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Est asperiores, ratione quas nostrum ipsam perspiciatis fugit neque in reprehenderit nemo nisi dolor, tempora placeat odio eaque! Et corporis earum quisquam.'
    },

    {
       id: 2,
      avatar: avatar1,
      name: 'Stevey Mcaulay',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Est asperiores, ratione quas nostrum ipsam perspiciatis fugit neque in reprehenderit nemo nisi dolor, tempora placeat odio eaque! Et corporis earum quisquam.'
    },

    {
     id: 3,
      avatar: avatar1,
      name: 'Anita Joseph',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Est asperiores, ratione quas nostrum ipsam perspiciatis fugit neque in reprehenderit nemo nisi dolor, tempora placeat odio eaque! Et corporis earum quisquam.'
    },
    
    {
      id: 4,
      avatar: avatar1,
      name: 'Katherine Freeman',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Est asperiores, ratione quas nostrum ipsam perspiciatis fugit neque in reprehenderit nemo nisi dolor, tempora placeat odio eaque! Et corporis earum quisquam.'
    }
  ]
  return (
    <section id="testimonials_section">
      
      <h5> Review from clients</h5>
      <h2> Testimonials </h2>

      <Swiper className='container testimonials_container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          reviewData.map(({id, avatar, name, review}) => {
            return (
                <SwiperSlide className="testimonial" key={id}>
          <div className="">
            <img src={avatar} className="client_avatar" alt="" />
                  <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
          </div>
        </SwiperSlide>
            )
          })
      }
      </Swiper>
    </section>
  )
}


export default Testimonials