const Email = () => {
  return (
    <div className="sms my-5 mx-auto">
      <div className="row mb-3">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-lg-3">
              <label htmlFor="phone">البريد الإلكتروني</label>
            </div>
            <div className="col-12 col-lg-9 mt-1 mt-lg-0">
              <input id="phone" type="text" className="form-control" required />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                  <label htmlFor="phone">أدخل نص الصورة</label>
                </div>
                <div className="col-12 col-lg-8 mt-1 mt-lg-0">
                  <input type="text" className="form-control" required />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mt-3 mt-lg-0">
              <div className="captcha-item d-flex justify-content-center align-items-center">
                {/* <ClientCaptcha
                  captchaCode={(code) => console.log(code)}
                  backgroundColor="#E1E6E8"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button type="submit" className="btn bg-main mt-3 w-100 rounded-5">
            ارسال رمز التحقق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
