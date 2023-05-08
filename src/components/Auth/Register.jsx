const Register = () => {
  return (
    <form className="signup mx-auto" noValidate>
      <div className="input-container position-relative mb-2">
        <input
          type="text"
          placeholder="الاسم"
          className="form-control"
          autoComplete="off"
          required
        />
        <span className="addStar position-absolute">*</span>
      </div>
      <div className="input-container position-relative mb-2">
        <input
          type="email"
          name="email"
          placeholder="البريد الالكتروني  (إختياري)"
          autoComplete="off"
          className="form-control"
        />
      </div>
      <div className="input-container position-relative mb-2">
        <input
          type="text"
          name="mobile"
          placeholder="رقم الجوال"
          required
          autoComplete="off"
          className="form-control"
        />
        <span className="addStar position-absolute">*</span>
      </div>

      <div className="input-container position-relative mb-2">
        <input
          type="password"
          name="new-password"
          placeholder="كلمة المرور"
          required
          className="form-control"
        />
        <span className="addStar position-absolute">*</span>
      </div>
      <div className="input-container position-relative mb-2">
        <input
          type="password"
          name="password_confirmation"
          placeholder="تأكيد كلمة المرور"
          required
          className="form-control"
        />
        <span className="addStar position-absolute">*</span>
      </div>
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
