import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TitlePage from "../../components/Uitily/TitlePage";

const OrdersPage = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <TitlePage title="الطلبات" />

        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th scope="col">رقم الطلب</th>
              <th scope="col">المستلم</th>
              <th scope="col">تاريخ الطلب</th>
              <th scope="col">المبلغ الاجمالي</th>
              <th scope="col">الحالة</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-0">
              <td className="border">
                <h5>لا يوجد طلبات</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default OrdersPage;
