import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";
import Footer from "../../components/Footer/Footer";
import Coupon from "../../components/Uitily/Coupon";
import { Link } from "react-router-dom";
import SingleProduct from "../../components/Products/SingleProduct";

const CartPage = () => {
  return (
    <div className="cart">
      <Header />
      <div className="container my-4">
        <TitlePage title="عربة التسوق" />
        <SingleProduct
          img={"images/products/product-1.jpg"}
          title={"برامج إدارة المبيعات"}
          price={"1500 ريال"}
          vipProduct={true}
          isList={true}
          isCart={true}
        />

        <div className="border-dark bg-light p-3 rounded-2">
          <h4>ملخص الطلبية</h4>
          <Coupon />
          <div className="order-details d-flex flex-column gap-2 fs-5">
            <div className="d-flex justify-content-between align-items-center">
              <span>المجموع الفرعي (منتج واحد)</span>
              <span>800 ر يال</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>الشحن</span>
              <span>10 ر يال</span>
            </div>
            <hr className="border border-dark" />
            <div className="d-flex justify-content-between align-items-center">
              <span>المجموع</span>
              <span>810 ر يال</span>
            </div>
          </div>
        </div>

        <div className="actons my-3 d-flex justify-content-center align-items-center gap-4">
          <Link to="/" className="btn bg-main w-50">
            متابعة للتسوق
          </Link>
          <Link to="/checkout" className="btn bg-main w-50">
            إتمام الشراء
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
