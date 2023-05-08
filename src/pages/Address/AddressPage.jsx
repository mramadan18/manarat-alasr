import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Uitily/Modal";

const AddressPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <TitlePage title="العناوين" />
        <div className="address border border-dark p-3 rounded-2 d-flex flex-column gap-1 my-3 position-relative overflow-hidden">
          <span>Mahmoud Ramadan</span>
          <span>Mahmoud Ramadan</span>
          <span>الدور الارضي</span>
          <span>01100594017</span>
          <span>جدة</span>
          <span>السعودية</span>

          <div className="actions d-flex flex-column justify-content-center align-items-center gap-2 position-absolute">
            <Link
              to="/edit-address/:id"
              className="btn bg-main d-flex justify-content-center align-items-center gap-2"
            >
              <span>تعديل</span>
              <FontAwesomeIcon icon={faEdit} className="text-white" />
            </Link>
            <Link
              className="btn bg-main d-flex justify-content-center align-items-center gap-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span>حذف</span>
              <FontAwesomeIcon icon={faEdit} className="text-white" />
            </Link>
          </div>
        </div>
        <Modal title="حذف العنوان" body="هل متأكد من الحذف؟" />
        <div className="add-address">
          <Link
            to="/add-address"
            className="d-flex align-items-center px-5 mb-4"
          >
            <div
              className="bg-white border-main p-2 d-flex justify-content-center align-items-center"
              style={{ borderWidth: "1px" }}
            >
              <FontAwesomeIcon icon={faPlus} className="text-main fs-5" />
            </div>
            <button className="btn bg-main rounded-0">إضافة عنوان جدبد</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddressPage;
