import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer bg-dark py-4">
      <div className="container d-flex flex-column justify-content-center align-items-center gap-4">
        <p
          className="text-center pb-5 w-100"
          style={{ borderBottom: "1px solid #646464" }}
        >
          <a className=" text-white" href="https://manarat-alasr.com/info">
            <span> عن المؤسسة </span>
          </a>
          <span className="text-white"> • </span>
          <a
            className=" text-white"
            href="https://manarat-alasr.com/terms-and-conditions"
          >
            <span>الشروط والأحكام</span>
          </a>
          <span className="text-white"> • </span>
          <a
            className=" text-white"
            href="https://manarat-alasr.com/privacyPolicy"
          >
            <span> سياسة الخصوصية </span>
          </a>
          <span className="text-white"> • </span>
          <a
            className=" text-white"
            href="https://manarat-alasr.com/contact-us"
          >
            <span> إتصل بنا</span>
          </a>
        </p>

        <div className="link-social d-flex justify-content-center align-items-center gap-5">
          <div
            className="icon rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "42px",
              height: "40px",
              border: "1px solid #646464",
              fontSize: "16px",
            }}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div
            className="icon rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "42px",
              height: "40px",
              border: "1px solid #646464",
              fontSize: "16px",
            }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div
            className="icon rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "42px",
              height: "40px",
              border: "1px solid #646464",
              fontSize: "16px",
            }}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div
            className="icon rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "42px",
              height: "40px",
              border: "1px solid #646464",
              fontSize: "16px",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <p className="text-white">منارات العصر © 2023</p>
      </div>
    </div>
  );
};

export default Footer;
