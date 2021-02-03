import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import './App.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Thumbs]);

function App() {
  const [thumbsSwiper, setThumbsSwiper ] = useState(null);
  const slides = [];
  
  let j = 0;
  for(let i = 0; i < 5; i += 1){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
                <img 
                 src={`https://picsum.photos/id/${i}/500/300`}
              // src="https://picsum.photos/id/1/500/300"
                alt={`Slide ${j}`}
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

  // var swiper = new Swiper('.swiper-container', {
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  //   }
  // });

  return (
    <React.Fragment>
      <Swiper 
        id="main" 
        thumbs = {{ swiper: thumbsSwiper}}
        tag="section" 
        wrapperTag="ul" 
        navigation 
        {...params}
        // pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        >
        <SwiperSlide key={`slide-2`} tag="li">
                <img 
                 src={`https://picsum.photos/id/1/500/300`}
              // src="https://picsum.photos/id/1/500/300"
                alt={`Slide 1`}
              />        
        </SwiperSlide>
        <SwiperSlide key={`slide-2`} tag="li">
                  <img 
                  src={`https://picsum.photos/id/2/500/300`}
                // src="https://picsum.photos/id/1/500/300"
                  alt={`Slide 2`}
                />        
        </SwiperSlide>
        <SwiperSlide key={`slide-3`} tag="li">
                  <img 
                  src={`https://picsum.photos/id/3/500/300`}
                // src="https://picsum.photos/id/1/500/300"
                  alt={`Slide 3`}
                />        
        </SwiperSlide>
        
        <div class="swiper-pagination"></div>
        
      </Swiper>
        
      {/* <Swiper 
        id="thumbs"
        spaceBetween={0}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}>
        {thumbs}
      </Swiper> */}
    </React.Fragment>
  );
}

export default App;
