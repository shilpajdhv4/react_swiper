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
        // {...params}
        // pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        >
        <SwiperSlide key={`slide-1`} tag="li">
          <Swiper
              spaceBetween={0}
              slidesPerView={1}
              // navigation
              {...params}
              // pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/11/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 11`}
                    />   
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/12/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 12`}
                    />   
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/13/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 13`}
                    />   
                  </SwiperSlide>
                  <div class="swiper-pagination swiper-pagination-v"></div>
            </Swiper>   
        </SwiperSlide>
        <SwiperSlide key={`slide-2`} tag="li">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              // navigation
              {...params}
              // pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/21/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 21`}
                    />   
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/22/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 22`}
                    />   
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/23/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 23`}
                    />   
                  </SwiperSlide>
                  <div class="swiper-pagination swiper-pagination-v"></div>
            </Swiper>
                       
        </SwiperSlide>
        <SwiperSlide key={`slide-3`} tag="li">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              // navigation
              {...params}
              // pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/31/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 31`}
                    />   
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/32/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 32`}
                    />   
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src={`https://picsum.photos/id/33/500/300`}
                    // src="https://picsum.photos/id/1/500/300"
                      alt={`Slide 33`}
                    />   
                  </SwiperSlide>
                  <div class="swiper-pagination swiper-pagination-v"></div>
            </Swiper>   
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
