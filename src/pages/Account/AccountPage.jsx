import Header from "../../components/Header/Header";
import {
  faEdit,
  faHeart,
  faLevelDownAlt,
  faLevelUpAlt,
  faLocationArrow,
  faUser,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import TitleItem from "../../components/Account/TitleItem";
import Item from "../../components/Account/Item";

const AccountPage = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="box d-flex justify-content-center align-items-center flex-column">
          <div className="title btn bg-main w-50 mb-3">
            <h5 className="m-0">مرحبا بك Mahmoud Ramadan</h5>
          </div>
          <TitleItem title="حسابي" icon={faUser} />
          <Item title="تعديل الحساب" icon={faUserEdit} path="/edit-account" />
          <Item title="العناووين" icon={faEdit} path="/address" />
          <Item title="المفضلة" icon={faHeart} path="/favorite" />
          <TitleItem title="طلباتي" icon={faLocationArrow} />
          <Item title="طلباتي" icon={faLevelUpAlt} path="/orders" />
          <Item title="مرتجعاتي " icon={faLevelDownAlt} path="/returns" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
