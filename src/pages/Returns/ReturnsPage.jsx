import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

const ReturnsPage = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <TitlePage title="المرتجعات" />

        <table className="table table-bordered text-center mt-4">
          <thead>
            <tr>
              <th>رقم المرتجع </th>
              <th>المستلم</th>
              <th>تاريخ المرتجع</th>
              <th>المبلغ الاجمالي</th>
              <th colSpan="2">الحالة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#10</td>
              <td>علي أحمد</td>
              <td>2020/02/23</td>
              <td>100 ريال</td>
              <td>قيد المراجعة </td>
              <td>
                <FontAwesomeIcon icon={faEye} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default ReturnsPage;
