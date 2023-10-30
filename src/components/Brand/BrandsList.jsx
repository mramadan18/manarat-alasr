import { useEffect, useState } from "react";
import Brand from "./Brand";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import BtnRemoveAndSortComp from "../Uitily/BtnRemoveAndSortComp";

const BrandsList = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    // add event listener to listen to window resize events
    window.addEventListener("resize", handleResize);

    // set initial screen size
    setScreenSize(window.innerWidth);

    // remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSliderView = () => {
    if (screenSize < 576) {
      return 2;
    } else if (screenSize > 576 && screenSize < 768) {
      return 3;
    } else if (screenSize > 768 && screenSize < 1200) {
      return 4;
    } else {
      return 6;
    }
  };

  return (
    <div className="container">
      <BtnRemoveAndSortComp />
      <div className="brands-list py-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={handleSliderView()}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Brand img={"/images/brands/brand-1.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <Brand img={"/images/brands/brand-2.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <Brand img={"/images/brands/brand-3.jpeg"} />
          </SwiperSlide>
          <SwiperSlide>
            <Brand img={"/images/brands/brand-4.jpeg"} />
          </SwiperSlide>
          <SwiperSlide>
            <Brand img={"/images/brands/brand-5.jpeg"} />
          </SwiperSlide>
          <SwiperSlide>
            <Brand img={"/images/brands/brand-6.png"} />
          </SwiperSlide>
          <SwiperSlide>
            <Brand img={"/images/brands/brand-7.png"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BrandsList;
