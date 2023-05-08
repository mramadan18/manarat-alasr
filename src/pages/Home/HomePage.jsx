import Header from "../../components/Header/Header";
import SliderAds from "../../components/Uitily/SliderAds";
import CategoryList from "../../components/Category/CategoryList";
import SliderProductsList from "../../components/SliderProducts/SliderProductsList";
import ServicesList from "../../components/Service/ServicesList";
import BrandsList from "../../components/Brand/BrandsList";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <SliderAds />
      <CategoryList categoryType="software" />
      <SliderProductsList
        title="الأكثر مبيعا"
        titleBtn="عرض الكل"
        path="/products"
      />
      <ServicesList />
      <CategoryList categoryType="device" />
      <SliderProductsList
        title="الأجهزة والطابعات"
        titleBtn="عرض الكل"
        path="/products"
      />
      <SliderProductsList
        title="الأحبار"
        titleBtn="عرض الكل"
        path="/products"
      />
      <SliderProductsList
        title="الأكسسوارات"
        titleBtn="عرض الكل"
        path="/products"
      />
      <BrandsList />
      <Footer />
    </>
  );
};

export default HomePage;