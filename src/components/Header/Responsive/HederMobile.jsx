import React, { useState } from "react";
import {
  faAngleDoubleLeft,
  faArrowAltCircleLeft,
  faCaretRight,
  faDesktop,
  faHeadset,
  faHeart,
  faHome,
  faMapMarkerAlt,
  faPhone,
  faSearch,
  faShoppingCart,
  faTimes,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faAccusoft, faWhmcs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const HederMobile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="mobile">
      <div className="header-m px-4">
        <div className="row justify-content-between align-items-center pt-1">
          <div className={`col-${showSearch ? "2" : "4"} menu-toggle`}>
            <label
              className="toggle-menu pt-1"
              onClick={() => setShowSidebar(true)}
            >
              ☰
            </label>
          </div>
          <div
            className="col-4 hudhud-logo text-center"
            style={{ display: showSearch && "none" }}
          >
            <div className="logo">
              <Link to="/">
                <img
                  className="img-fluid full-path"
                  src="/images/logo.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div
            className={`col-${
              showSearch ? "10" : "4"
            } d-flex justify-content-end`}
          >
            <div className="d-flex justify-content-end align-items-center gap-2 w-100">
              <div className="search text-start w-100">
                {showSearch && (
                  <input
                    id="txt-search22"
                    className="txt-search"
                    type="text"
                    placeholder="بحث"
                  />
                )}
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`${showSearch && "position-absolute"} search-icon`}
                  onClick={() => {
                    setShowSearch(true);
                  }}
                />
                {showSearch && (
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="close"
                    onClick={() => {
                      setShowSearch(false);
                    }}
                  />
                )}
              </div>
              {!showSearch && (
                <div className="favorite">
                  <Link to="/favorite" className="heart position-relative">
                    <FontAwesomeIcon icon={faHeart} />

                    <span
                      className="fav-count"
                      style={{
                        background: "#ff3838",
                        top: "-10px",
                        left: "-8px",
                      }}
                    >
                      0
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="menu py-2 px-3"
        style={{ right: showSidebar ? "0" : "-100%" }}
      >
        <div className="top border-bottom d-flex justify-content-between align-items-center">
          <div className="info_phone d-flex justify-content-center align-items-center gap-2">
            <a href="/" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon icon={faPhone} className="mx-1" />
              <span>ج.مؤسسة/ 0555707200</span>
            </a>
            |
            <a href="/" style={{ fontSize: "12px" }}>
              <FontAwesomeIcon icon={faHeadset} className="mx-1" />
              <span>ج.برمجيات/0537900829</span>
            </a>
          </div>
          <div className="hide-toggle-menu">
            <FontAwesomeIcon
              icon={faTimes}
              className="fs-4"
              onClick={() => setShowSidebar(false)}
            />
          </div>
        </div>

        <div className="table-responsive mt-4 d-flex justify-content-evenly align-items-center">
          <Link to="/auth/login" className="btn btn-sm bg-main">
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="text-white ms-1"
            />
            <span>التسجيل/الدخول</span>
          </Link>

          <a
            href="https://goo.gl/maps/wPxwS2RF2XfErRtn6"
            className="btn btn-sm bg-main"
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-white ms-1"
            />
            <span>تبوك - شارع الخمسين</span>
          </a>
        </div>

        <ul className="dropdown mt-5">
          <li className="dropdown-item">
            <NavLink to="/" className="d-block px-2 rounded-2 overflow-hidden">
              الرئيسية
            </NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink
              to="/category/121"
              className="d-flex justify-content-between align-items-center w-100 px-2"
            >
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faAccusoft} className="fs-4r" />
                <span>الأجهزة وملحقاتها</span>
              </div>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="opn accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              />
            </NavLink>
            <div>
              <ul
                id="collapseOne"
                className="accordion-collapse collapse show mt-3 mb-2 pe-5"
                data-bs-parent="#accordionExample"
              >
                <li className="py-2">
                  <NavLink
                    to="/category/127"
                    className="rounded-2 px-2 d-flex justify-content-start align-items-center"
                  >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    الأجهزة والشاشات
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/category/129"
                    className="rounded-2 px-2 d-flex justify-content-start align-items-center"
                  >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    الطابعات
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/category/130"
                    className="rounded-2 px-2 d-flex justify-content-start align-items-center"
                  >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    الأحبار
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/category/131"
                    className="rounded-2 px-2 d-flex justify-content-start align-items-center"
                  >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    الاكسسوارات
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink
                    to="/category/132"
                    className="rounded-2 px-2 d-flex justify-content-start align-items-center"
                  >
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    المستخدم
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="dropdown-item">
            <NavLink
              to="/category/124"
              className="rounded-2 px-2 d-flex justify-content-start align-items-center"
            >
              <FontAwesomeIcon icon={faAccusoft} />
              برامج حسب الطلب
            </NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink
              to="/category/125"
              className="rounded-2 px-2 d-flex justify-content-start align-items-center"
            >
              <FontAwesomeIcon icon={faAccusoft} />
              تجهيز الكاشير
            </NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink
              to="/category/126"
              className="rounded-2 px-2 d-flex justify-content-start align-items-center"
            >
              <FontAwesomeIcon icon={faAccusoft} />
              شركائنا في النجاح
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-mobile">
        <div className="footer-menu">
          <div className="footer-menu-cat">
            <Link to="/" className="text_conten active">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="txt-cat">الرئيسية</span>
            </Link>
          </div>
          <div className="footer-menu-cat">
            <Link to="/category/125" className="text_conten">
              <span className="icon">
                <FontAwesomeIcon icon={faDesktop} />
              </span>
              <span>تجهيز الكاشير</span>
            </Link>
          </div>
          <div className="footer-menu-cat">
            <Link to="/category/122" className="text_conten">
              <span className="icon">
                <i className="fab fa-whmcs" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faWhmcs} />
              </span>
              <span className="txt-cat">البرمجيات</span>
            </Link>
          </div>
          <div className="footer-menu-cat cart-shopping">
            <Link to="/cart" className="cart header-cart aa text_conten">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="txt-cat">عربة التسوق</span>
              <span className="cart-count">1</span>
            </Link>
          </div>

          <div className="footer-menu-cat">
            <Link to="/account" className="text_conten">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="col-xs-12 txt-cat">حسابي</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HederMobile;
