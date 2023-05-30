import { useEffect, useState } from "react";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomMode from "./CustomMode";
import CustomColor from "./CustomColor";
import CustomFontSize from "./CustomFontSize";
import CustomFontFamily from "./CustomFontFamily";

const CustomTheme = () => {
  const [showCustom, setShowCustom] = useState(false);

  return (
    <div
      className={`custom py-2 d-flex flex-column ${
        showCustom ? "show" : "hide"
      }`}
    >
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

        <CustomMode />

        <CustomColor />

        <CustomFontSize />

        <CustomFontFamily />
      </div>
    </div>
  );
};

export default CustomTheme;
