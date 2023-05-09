import { useEffect, useState } from "react";
import SubTitle from "../Uitily/SubTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import SliderProduct from "./SliderProduct";

const SliderProductsList = ({ title, titleBtn, path }) => {
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
      return 2.5;
    } else if (screenSize > 576 && screenSize < 768) {
      return 3.5;
    } else if (screenSize > 768 && screenSize < 1200) {
      return 4.5;
    } else {
      return 6.5;
    }
  };

  return (
    <div className="container px-0">
      <div className="products-list mt-2">
        <SubTitle title={title} titleBtn={titleBtn} path={path} />

        <Swiper
          spaceBetween={10}
          slidesPerView={handleSliderView()}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              vipProduct={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-2.jpg"}
              title={"نظام إدارة مبيعات الذهب"}
              price={"3000 ريال"}
              vipProduct={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-3.jpg"}
              title={"جهاز C i5  DELL  مستخدم مجدد مع الشاشة"}
              price={"1350 ريال"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-4.jpg"}
              title={"قطعة WiFi ALFA"}
              price={"50 ريال"}
              newProduct={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-5.jpg"}
              title={"كيبورد وماوس قيمنق"}
              price={"40 ريال"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-6.jpg"}
              title={"قطعة HD WiFi Any Cast"}
              price={"60 ريال"}
              newProduct={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-3.jpg"}
              title={"جهاز C i5  DELL  مستخدم مجدد مع الشاشة"}
              price={"1350 ريال"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProduct
              img={"/images/products/product-4.jpg"}
              title={"قطعة WiFi ALFA"}
              price={"50 ريال"}
              newProduct={true}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderProductsList;
