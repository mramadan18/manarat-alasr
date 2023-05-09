import { useEffect, useState } from "react";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomTheme = () => {
  const htmlTag = document.querySelector("html");
  const [showCustom, setShowCustom] = useState(false);
  const [color, setColor] = useState("blue");
  const [fontSize, setFontSize] = useState("medium");

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(color);

    htmlTag.classList = "";
    htmlTag.classList.add(fontSize);
  }, [color, fontSize, htmlTag]);

  return (
    <div className={`custom py-2 d-flex flex-column ${showCustom && "show"}`}>
      <div
        className="cog position-absolute top-50 d-flex justify-content-center align-items-center rounded-end bg-main"
        onClick={() => setShowCustom(!showCustom)}
      >
        <FontAwesomeIcon icon={faCog} className="text-white fs-5" />
      </div>

      <div className="theme-customization d-flex justify-content-between align-items-center ps-4 pe-3 border-bottom pb-2">
        <div className="info">
          <h5 className="mb-0">تصخصيص الثيم</h5>
          <p className="text-secondary mb-0 fs-6">تخصيص ومعاينة فورية</p>
        </div>
        <div className="close-icon">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-black fa-sm"
            onClick={() => setShowCustom(false)}
          />
        </div>
      </div>

      <div className="theming px-3 py-3 border-bottom ">
        <p className="mb-0 text-secondary">تصميم الثيم</p>
        <p className="mt-2 mb-0">الوضع</p>

        <div className="choose-mode d-flex justify-content-start align-items-center gap-4 mt-2 px-3">
          <div className="light">
            <label>
              <input type="radio" name="radio" value="option1" />
              <span className="custom-radio ms-2"></span>
              فاتح
            </label>
          </div>
          <div className="dark">
            <label>
              <input type="radio" name="radio" value="option2" />
              <span className="custom-radio ms-2"></span>
              داكن
            </label>
          </div>
        </div>

        <p className="mt-3 mb-0">اللون الأساسي</p>
        <div className="choose-color d-flex justify-content-between align-items-center mt-3 px-3">
          <span onClick={() => setColor("blue")} className="blue"></span>
          <span onClick={() => setColor("green")} className="green"></span>
          <span onClick={() => setColor("red")} className="red"></span>
          <span onClick={() => setColor("orange")} className="orange"></span>
          <span onClick={() => setColor("purple")} className="purple"></span>
          <span onClick={() => setColor("honey")} className="honey"></span>
        </div>

        <p className="mt-3 mb-0">حجم الخط</p>
        <div className="choose-font-size d-flex justify-content-between align-items-center mt-3 px-3">
          <span onClick={() => setFontSize("small")} className="small">
            صغير
          </span>
          <span onClick={() => setFontSize("medium")} className="medium">
            متوسسط
          </span>
          <span onClick={() => setFontSize("large")} className="large">
            كبير
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomTheme;
