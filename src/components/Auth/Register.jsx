import InputRequired from "../Uitily/InputRequired";
import InputUnrequired from "../Uitily/InputUnrequired";

const Register = () => {
  return (
    <form className="signup mx-auto" noValidate>
      <InputRequired type="text" placeholder="الأسم" />
      <InputUnrequired
        type="email"
        placeholder="البريد الالكتروني  (إختياري)"
      />
      <InputRequired type="text" placeholder="رقم الجوال" />
      <InputRequired type="password" placeholder="كلمة المرور" />
      <InputRequired type="password" placeholder="تأكيد كلمة المرور" />

      <div className="pull-right text-end mt-3">
        <input type="checkbox" name="agree" className="ms-2" />
        <label className="control-label">
          لقد قرأت ووافقت علي
          <a href="/" className="agree">
            <b> الشروط والأحكام</b>
          </a>
        </label>
      </div>
      <button className="btn bg-main w-100 mt-4 rounded-5" type="submit">
        انشاء حساب
      </button>
    </form>
  );
};

export default Register;
