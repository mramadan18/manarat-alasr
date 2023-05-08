import { Outlet } from "react-router-dom";
import TitlePage from "../../components/Uitily/TitlePage";
import ChooseAuth from "../../components/Auth/ChooseAuth";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AuthPage = () => {
  return (
    <div className="auth">
      <Header />
      <div className="container text-center my-3 mx-auto">
        <TitlePage title="التسجيل وتسجيل الدخول" />
        <ChooseAuth
          pathOne="/auth/login"
          chooseOne="تسجيل الدخول"
          pathTwo="/auth/register"
          chooseTwo="انشاء حساب"
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
