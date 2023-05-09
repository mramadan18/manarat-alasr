import { useState } from "react";
import CategoryList from "../../components/Category/CategoryList";
import Filter from "../../components/Uitily/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SliderAds from "../../components/Uitily/SliderAds";
import Product from "../../components/Products/Product";
import { useParams } from "react-router-dom";
import ServicesList from "../../components/Service/ServicesList";
import SliderProductsList from "../../components/Products/SliderProductsList";
import Brand from "../../components/Brand/Brand";
import TitlePage from "../../components/Uitily/TitlePage";
import CallUs from "../../components/CallUs/CallUs";

const AllCategoriesPage = () => {
  const [isList, setIsList] = useState(false);
  const { id } = useParams();

  return (
    <>
      <Header />
      {id === "121" && (
        <>
          <SliderAds />
          <CategoryList categoryType="device" />
          <div className="container">
            <Filter isList={isList} setIsList={setIsList} />
            <Product
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              isFavorite={false}
              isList={isList}
            />
          </div>
        </>
      )}
      {id === "127" && (
        <>
          <CategoryList categoryType="device" />
          <div className="container">
            <Filter isList={isList} setIsList={setIsList} />
            <Product
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              isFavorite={false}
              isList={isList}
            />
          </div>
        </>
      )}
      {id === "129" && (
        <>
          <CategoryList categoryType="device" />
          <div className="container">
            <Filter isList={isList} setIsList={setIsList} />
            <Product
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              isFavorite={false}
              isList={isList}
            />
          </div>
        </>
      )}
      {id === "130" && (
        <>
          <CategoryList categoryType="device" />
          <div className="container">
            <Filter isList={isList} setIsList={setIsList} />
            <Product
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              isFavorite={false}
              isList={isList}
            />
          </div>
        </>
      )}
      {id === "131" && (
        <>
          <CategoryList categoryType="device" />
          <div className="container">
            <Filter isList={isList} setIsList={setIsList} />
            <Product
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              isFavorite={false}
              isList={isList}
            />
          </div>
        </>
      )}
      {id === "132" && (
        <>
          <CategoryList categoryType="device" />
          <div className="container">
            <Filter isList={isList} setIsList={setIsList} />
            <Product
              img={"/images/products/product-1.jpg"}
              title={"برامج إدارة المبيعات"}
              price={"1500 ريال"}
              isFavorite={false}
              isList={isList}
            />
          </div>
        </>
      )}
      {id === "124" && (
        <>
          <SliderAds />
          <div className="container">
            <ServicesList />
            <CallUs />
          </div>
        </>
      )}
      {id === "135" && (
        <>
          <SliderAds />
          <div className="container">
            <ServicesList />
            <CallUs />
          </div>
        </>
      )}
      {id === "125" && (
        <>
          <SliderAds />
          <div className="container">
            <SliderProductsList />
            <ServicesList />
          </div>
        </>
      )}
      {id === "126" && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-1.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-2.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-3.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-4.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-5.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-6.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-1.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-2.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-3.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-4.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-5.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-6.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-1.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-2.png"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-3.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-4.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-5.jpeg"} />
              </div>
              <div className="col-4 col-lg-2">
                <Brand img={"/images/brands/brand-6.png"} />
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default AllCategoriesPage;
