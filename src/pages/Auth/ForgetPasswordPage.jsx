import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";
import ChooseAuth from "../../components/Auth/ChooseAuth";
import Footer from "../../components/Footer/Footer";

const ForgetPasswordPage = () => {
  return (
    <>
      <Header />
      <div className="container text-center my-3">
        <div className="forget-password">
          <TitlePage title="نسيت كلمة المرور" />
          <ChooseAuth
            pathOne="/forget-password/sms"
            chooseOne="SMS"
            pathTwo="/forget-password/email"
            chooseTwo="البريد"
          />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPasswordPage;
