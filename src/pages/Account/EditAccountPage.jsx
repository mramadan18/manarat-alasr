import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";
import Footer from "../../components/Footer/Footer";

const EditAccountPage = () => {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <>
      <Header />
      <div className="container my-3">
        <TitlePage title="معلوماتك الشخصية" />
        <form className="signup mx-auto" noValidate>
          <div className="input-container position-relative mb-2">
            <input
              type="text"
              defaultValue="Mahmoud Ramadan"
              className="form-control"
              autoComplete="off"
              required
            />
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="input-container position-relative mb-2">
            <input
              type="text"
              name="mobile"
              defaultValue="01100594017"
              required
              autoComplete="off"
              className="form-control"
            />
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="input-container position-relative mb-2">
            <input
              type="email"
              name="email"
              defaultValue="m.ramadan181199@gmail.com"
              autoComplete="off"
              className="form-control"
            />
            <span className="addStar position-absolute">*</span>
          </div>
          <div className="text-end">
            <Link
              className="password-forgotten fs-6 d-block px-2"
              onClick={() => setChangePassword(!changePassword)}
            >
              تغيير كلمة المرور؟
            </Link>
          </div>

          {changePassword && (
            <>
              <input
                className="form-control mb-2"
                type="password"
                placeholder="إدخل كلمة المرور الحالية"
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="إدخال كلمة المرور الجديدة"
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="تأكيد كلمة المرور الجديدة"
              />
            </>
          )}
          <button className="btn bg-main w-100 mt-3 rounded-5" type="submit">
            حفظ التعديلات
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default EditAccountPage;
