import { useState } from "react";
import CategoryList from "../../components/Category/CategoryList";
import Filter from "../../components/Uitily/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SliderAds from "../../components/Uitily/SliderAds";
import Product from "../../components/Products/Product";

const AllCategoriesPage = () => {
  const [isList, setIsList] = useState(false);

  return (
    <>
      <Header />
      <SliderAds />
      <CategoryList categoryType="device" />
      <div className="container">
        <Filter isList={isList} setIsList={setIsList} />
        <Product
          img={"images/products/product-1.jpg"}
          title={"برامج إدارة المبيعات"}
          price={"1500 ريال"}
          isFavorite={false}
          isList={isList}
        />
      </div>
      <Footer />
    </>
  );
};

export default AllCategoriesPage;
