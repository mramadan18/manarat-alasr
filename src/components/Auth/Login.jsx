import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="login mx-auto" method="POST">
      <input
        className="form-control mb-2"
        type="text"
        name="mobile"
        placeholder="رقم الجوال"
      />
      <input
        className="form-control mb-2"
        type="password"
        name="password"
        placeholder="كلمة المرور"
      />
      <div className="text-end">
        <Link
          to="/forget-password/sms"
          className="password-forgotten fs-6 mb-2 me-2 d-block"
        >
          نسيت كلمة المرور؟
        </Link>
      </div>
      <button type="submit" className="btn bg-main w-100 rounded-5">
        دخول
      </button>
    </form>
  );
};

export default Login;
