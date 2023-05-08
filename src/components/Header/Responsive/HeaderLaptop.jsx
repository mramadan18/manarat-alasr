// icons
import {
  faArrowAltCircleLeft,
  faHeadset,
  faHeart,
  faMapMarkerAlt,
  faPhone,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const HeaderLaptop = () => {
  return (
    <div className="laptop overflow-hidden">
      <div className="upper-bar py-2">
        <div className="container-fulid">
          <div className="row px-2">
            <div className="col-md-4 d-flex gap-2">
              <a href="/">
                <FontAwesomeIcon icon={faPhone} className="mx-1 text-white" />
                <span>0555707200</span>
              </a>
              <span className="text-white">|</span>
              <a href="/">
                <FontAwesomeIcon icon={faHeadset} className="mx-1 text-white" />
                <span>0537900829</span>
              </a>
            </div>
            <div className="col-md-8 d-flex justify-content-end">
              <ul className="d-flex gap-2">
                <li>
                  <Link to="/auth/login">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleLeft}
                      className="mx-1"
                    />
                    <span>التسجيل/الدخول</span>
                  </Link>
                </li>
                <span className="text-white">|</span>
                <li>
                  <a href="https://goo.gl/maps/wPxwS2RF2XfErRtn6">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-1" />
                    <span>تبوك - شارع الخمسين</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fulid">
        <div className="nav-bar">
          <div className="row my-2 align-items-center border-bottom pb-2">
            <div className="col-md-3 logo">
              <Link to="/">
                <img
                  className="img-fluid full-path"
                  src="images/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="search-box position-relative w-100">
                <input
                  className="rounded-5 w-100 py-2 px-3 bg-main"
                  id="searsh"
                  type="text"
                  placeholder="بحث"
                />
                <NavLink id="button_search">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="position-absolute text-black"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="ntf-box">
                <ul className="d-flex justify-content-center align-items-center gap-2">
                  <li>
                    <Link className="user" to="/account">
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </li>

                  <li>
                    <Link to="/favorite" className="heart">
                      <FontAwesomeIcon icon={faHeart} />
                      <span
                        className="fav-count"
                        style={{ background: "#ff3838" }}
                      >
                        0
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/cart" className="cart header-cart">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span
                        className="cart-count"
                        style={{ background: "#f44" }}
                      >
                        0
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mx-0">
            <ul className="nav py-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/">
                  الرئيسية
                </NavLink>
              </li>
              |
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-black d-flex align-items-center gap-1 dropdown-item"
                  to="/category"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  الأجهزة وملحقاتها
                </NavLink>
                <div className="dropdown-menu">
                  <ul>
                    <li
                      className="dropdown-item"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <NavLink to="/category/127">الأجهزة والشاشات</NavLink>
                    </li>
                    <li
                      className="dropdown-item"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <NavLink to="/category/129">الطابعات</NavLink>
                    </li>
                    <li
                      className="dropdown-item"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <NavLink to="/category/130">الأحبار</NavLink>
                    </li>
                    <li
                      className="dropdown-item"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <NavLink to="/category/131">الاكسسوارات</NavLink>
                    </li>
                    <li
                      className="dropdown-item"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <NavLink to="/category/132">المستخدم</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              |
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/category/124">
                  برامج حسب الطلب
                </NavLink>
              </li>
              |
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/category/135">
                  المتاجر الإلكترونية
                </NavLink>
              </li>
              |
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/category/125">
                  تجهيز الكاشير
                </NavLink>
              </li>
              |
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/category/126">
                  شركائنا في النجاح
                </NavLink>
              </li>
            </ul>
            <div className="pop-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLaptop;
