import {
  faHeart,
  faTrashCan,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Quantity from "../Uitily/Quantity";

const SingleProduct = ({
  img,
  title,
  price,
  newProduct,
  vipProduct,
  isFavorite,
  isCart,
  isList,
}) => {
  return (
    <div className={`${isList ? "col-12" : "col-6 col-lg-3"}`}>
      <div className="single-product mb-2">
        <div className="product position-relative text-center">
          {isCart && (
            <div className="delete position-absolute">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="bg-main rounded-5 fs-4"
              />
            </div>
          )}
          <div className={`card position-relative ${isList && "list"}`}>
            <div className="new-vip position-absolute top-0 end-0 p-1">
              {newProduct && (
                <span className="btn btn-sm btn-success rounded-0">جديد</span>
              )}
              {vipProduct && (
                <span className="btn btn-sm btn-warning rounded-0">مميز</span>
              )}
            </div>
            <Link to="/products/:id">
              <img src={img} className="card-img-top" alt={title} />
              <div className="card-body pb-1">
                <p className="card-desc">{title}</p>
                <p className="card-price mb-0 p-0">{price}</p>
              </div>
            </Link>

            <div className="icons pt-3 pb-2 d-flex justify-content-end align-items-center gap-3 w-100">
              {isCart ? (
                <Quantity />
              ) : (
                <>
                  <div className="btn btn-sm bg-main d-flex align-items-center gap-2 add-card">
                    <span className="fa-1x">إضافة للعربة</span>
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="text-white fs-sm"
                    />
                  </div>
                </>
              )}
              {isFavorite ? (
                <FontAwesomeIcon icon={faTrashCan} className="fs-5" />
              ) : (
                <FontAwesomeIcon icon={faHeart} className="fs-3" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
