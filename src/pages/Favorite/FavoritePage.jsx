import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Product from "../../components/Products/Product";
import TitlePage from "../../components/Uitily/TitlePage";

const FavoritePage = () => {
  return (
    <>
      <Header />
      <div className="container my-3">
        <TitlePage title="المفضلة" />
        <div className="row mt-3">
          <Product
            img={"images/products/product-1.jpg"}
            title={"برامج إدارة المبيعات"}
            price={"1500 ريال"}
            vipProduct={true}
            isFavorite={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoritePage;
