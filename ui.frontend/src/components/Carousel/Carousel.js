import React from 'react'
import {MapTo} from '@adobe/aem-react-editable-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "../../../node_modules/swiper/swiper-bundle.css";


export const CarouselEditConfig = {

    emptyLabel: 'Carousel',

    isEmpty: function(props) {
        return !props;
    }
};


export const Carousel =({props})=> {
  return (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  )
}

MapTo('wknd-spa-react/components/carousel')(Carousel, CarouselEditConfig);