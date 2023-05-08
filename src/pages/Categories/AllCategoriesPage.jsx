import { useState } from "react";
import CategoryList from "../../components/Category/CategoryList";
import Filter from "../../components/Uitily/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsView from "../../components/Products/ProductsView";
import SliderAds from "../../components/Uitily/SliderAds";

const AllCategoriesPage = () => {
  const [isList, setIsList] = useState(false);

  return (
    <>
      <Header />
      <SliderAds />
      <CategoryList categoryType="device" />
      <div className="container">
        <Filter isList={isList} setIsList={setIsList} />
        <ProductsView isList={isList} />
      </div>
      <Footer />
    </>
  );
};

export default AllCategoriesPage;