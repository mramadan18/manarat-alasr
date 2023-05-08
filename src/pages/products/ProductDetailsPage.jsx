import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import SliderProductDetails from "../../components/Products/SliderProductDetails";
import { faHeart, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faHistory,
  faLuggageCart,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import Quantity from "../../components/Uitily/Quantity";

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <div className="product-details container my-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <SliderProductDetails />
          </div>
          <div className="col-12 col-lg-6">
            <div className="details rounded-3 p-3 bg-light">
              <h4 className="mt-0 mt-lg-3 mb-3">
                جهاز C i5 DELL مستخدم مجدد مع الشاشة
              </h4>
              <div className="info">
                <div className="item d-flex justify-content-start align-items-center gap-5 mt-1">
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-1">
                    <FontAwesomeIcon
                      icon={faMoneyBill1}
                      className="text-black fs-5"
                    />
                    <span className="fs-5">السعر :</span>
                  </div>
                  <div className="">1350 ريال</div>
                </div>
                <div className="item d-flex justify-content-start align-items-center gap-5 mt-1">
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-1">
                    <FontAwesomeIcon
                      icon={faTags}
                      className="text-black fs-s"
                    />
                    <span className="fs-5">القسم :</span>
                  </div>
                  <div className="">المستخدم الأجهزة</div>
                </div>
                <div className="item d-flex justify-content-start align-items-center gap-5 mt-1">
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-1">
                    <FontAwesomeIcon
                      icon={faHistory}
                      className="text-black fs-5"
                    />
                    <span className="fs-5">حالة :</span>
                  </div>
                  <div className="">متوفر</div>
                </div>
                <div className="item d-flex justify-content-start align-items-center gap-5 mt-1">
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-1">
                    <FontAwesomeIcon
                      icon={faLuggageCart}
                      className="text-black fs-5"
                    />
                    <span className="fs-5">الكمية المتوفرة :</span>
                  </div>
                  <div className="">2</div>
                </div>
                <div className="item d-flex justify-content-start align-items-center gap-5 mt-5">
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-1">
                    <FontAwesomeIcon
                      icon={faLuggageCart}
                      className="text-black fs-5"
                    />
                    <span className="fs-5">الكمية :</span>
                  </div>
                  <Quantity />
                </div>
              </div>

              <div className="actions py-4 d-flex justify-content-center align-items-center gap-2">
                <button className="btn bg-main d-flex justify-content-center align-items-center gap-2">
                  <span>إضافة للعربة</span>
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="text-white fs-6"
                  />
                </button>
                <button className="btn bg-main d-flex justify-content-center align-items-center gap-2">
                  <span>إضافة للمفضلة</span>
                  <FontAwesomeIcon icon={faHeart} className="text-white fs-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              data-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              تفاصيل
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active p-3"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <p>جهاز DELL مستخدم مجدد مع الشاشة</p>
            <p>معالج i5</p>
            <p>هارد HDD : 1T</p>
            <p>RAM : 4 ضمان الجهاز شهر من تاريخ الشراء </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;
