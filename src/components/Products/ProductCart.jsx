import {
  faHeart,
  faTrashCan,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Quantity from "../Uitily/Quantity";

const ProductCart = ({ img, title, price, isFavorite, isList }) => {
  return (
    <div className="col-12">
      <div className="product position-relative text-center">
        <div className="delete position-absolute">
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="bg-main rounded-5 fs-4"
          />
        </div>
        <div className="card position-relative list">
          <Link to="/products/:id">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body pb-1">
              <p className="card-desc">{title}</p>
              <p className="card-price mb-0 p-0">{price}</p>
            </div>
          </Link>

          <div className="icons pt-3 pb-2 d-flex justify-content-end align-items-center gap-3 w-100">
            <Quantity />
            {isFavorite ? (
              <FontAwesomeIcon icon={faTrashCan} className="fs-5" />
            ) : (
              <FontAwesomeIcon icon={faHeart} className="fs-3" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
