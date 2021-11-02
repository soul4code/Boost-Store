import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SliderItem from "./SliderItem";

const SwiperSlider = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={`main-swiper__container`}
    >
      <SwiperSlide className={`main__swiper-slide`}>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide className={`main__swiper-slide`}>
        <SliderItem />
      </SwiperSlide>
      <SwiperSlide className={`main__swiper-slide`}>
        <SliderItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
