import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import './style.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Thumbs]);

function App() {
  const [thumbsSwiper, setThumbsSwiper ] = useState(null);
  const slides = [];

  for(let i = 0; i < 5; i += 1){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img 
        src={`https://picsum.photos/id/${i}/500/300`}
        // src="https://picsum.photos/id/1/500/300"
        alt={`Slide ${i}`}
        />
      </SwiperSlide>
    )
  }
 
  const thumbs = [];
  for (let i = 0; i < 5; i += 1){
    thumbs.push(
      <SwiperSlide key={` thumbs-${i}`} tag="li" style={{ listStyle : 'none'}} 
      >
        <img src={`https://picsum.photos/id/${i}/163/100`} alt={ `Thumbnail ${i}` }/>
      </SwiperSlide>
    )
  }

  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }
  }


  return (
    <div class="swiper-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
        <SwiperSlide>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>venticle 1</SwiperSlide>
              <SwiperSlide>venticle 2</SwiperSlide>
              <SwiperSlide>venticle 3</SwiperSlide>
              <div class="swiper-pagination swiper-pagination-v"></div>
            </Swiper>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>      
        <div class="swiper-pagination swiper-pagination-h"></div>  ...
      </Swiper>
    </div>
  );
}

export default App;
