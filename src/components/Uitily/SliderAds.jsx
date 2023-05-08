// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const SliderAds = () => {
  return (
    <div className="slider-ads">
      <div className="container-fulid mb-2 mt-lg-2">
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="slider"
        >
          <SwiperSlide>
            <img src="images/slider-1.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/slider-1.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/slider-1.jpeg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderAds;
