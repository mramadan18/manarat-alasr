import {
  faMapMarkerAlt,
  faMoneyCheck,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header/Header";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="shipping-address">
          <div className="title py-2 bg-main d-flex justify-content-center align-items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            <h5 className="m-0">عنوان الشحن</h5>
          </div>
          <div className="content bg-light text-center py-2 border">
            <button className="btn">أريد استخدام عنوان جديد</button>
          </div>
        </div>
        <div className="shipping-methods mt-4">
          <div className="title py-2 bg-main d-flex justify-content-center align-items-center gap-2">
            <FontAwesomeIcon icon={faShippingFast} className="text-white" />
            <h5 className="m-0">طرق الشحن</h5>
          </div>
          <div className="content bg-light text-center py-2 border">
            <button className="btn">اضف عنوان جديد لاتاحة طرق الشحن</button>
          </div>
        </div>
        <div className="shipping-notes my-4">
          <div className="title py-2 bg-main text-center">
            <h5 className="m-0">ملاحظات الشحن</h5>
          </div>
          <div className="content bg-light text-center p-2 border">
            <textarea className="form-control h-50"></textarea>
          </div>
        </div>

        <div className="payment-methods mt-4">
          <div className="title py-2 bg-main d-flex justify-content-center align-items-center gap-2">
            <FontAwesomeIcon icon={faMoneyCheck} className="text-white" />
            <h5 className="m-0">طرق الدفع</h5>
          </div>
          <div className="content bg-light text-center py-2 border">
            <select className="form-select">
              <option selected>الدفع عند الإستلام</option>
              <option className="from-control">
                الدفع عبر البطاقة الإتمانية
              </option>
            </select>
          </div>
        </div>

        <h4 className="mt-3">مراجعتك طلبتك</h4>
        <table className="table table-bordered table-responsive mt-4">
          <thead>
            <tr>
              <th scope="col">اسم المنتج</th>
              <th scope="col">الكمية</th>
              <th scope="col">سعر الوحدة</th>
              <th scope="col">الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>كيبورد وماوس قيمنق</td>
              <td>2</td>
              <td>40 ريال</td>
              <td>40 ريال</td>
            </tr>
          </tbody>
        </table>

        <table className="table p-2 table-borderless">
          <tr>
            <td className="px-2">المجموع</td>
            <td className="px-2">40 ريال</td>
          </tr>
          <tr>
            <td className="px-2">سعر التوصيل</td>
            <td className="px-2">2</td>
          </tr>
          <tr>
            <td className="px-2">الضريبة</td>
            <td className="px-2">0 ريال</td>
          </tr>
          <tr className="bg-dark text-white">
            <td className="px-2">الإجمالي النهائي</td>
            <td className="px-2">40 ريال</td>
          </tr>
        </table>

        <div className="actons my-3 d-flex justify-content-center align-items-center gap-4">
          <button className="btn bg-main w-50">متابعة للتسوق</button>
          <button className="btn bg-main w-50">تأكيد الطلب</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
