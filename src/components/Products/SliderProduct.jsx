import { Link } from "react-router-dom";
// icons
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SliderProduct = ({
  img,
  title,
  price,
  newProduct,
  vipProduct,
  isEmpty,
}) => {
  return (
    <div className="product text-end">
      <div className="card position-relative">
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

        <div className="icons pt-3 pb-2 d-flex justify-content-center align-items-center gap-3">
          {isEmpty ? (
            <div className="btn btn-sm btn-danger py-0">نفذت الكمية</div>
          ) : (
            <FontAwesomeIcon icon={faCartPlus} />
          )}
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
