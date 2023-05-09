import InputRequired from "../Uitily/InputRequired";
import TitlePage from "../Uitily/TitlePage";

const CallUs = () => {
  return (
    <div className="call-us my-3">
      <TitlePage title="اتصل بنا" />
      <InputRequired type="text" placeholder="الأسم" />
      <InputRequired type="text" placeholder="رقم الهاتف أو الجوال" />
      <InputRequired type="email" placeholder="البريد الالكتروني" />

      <label htmlFor="message" className="me-2">
        الرسالة
      </label>
      <textarea className="form-control" id="message" rows="5"></textarea>

      <button className="btn bg-main mt-3 me-2">إرسال</button>
    </div>
  );
};

export default CallUs;
