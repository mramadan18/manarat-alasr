import { useEffect, useState } from "react";

const CustomFontSize = () => {
  const htmlTag = document.querySelector("html");
  const [fontSize, setFontSize] = useState("medium");

  useEffect(() => {
    htmlTag.setAttribute("data-font-size", fontSize);
  }, [fontSize, htmlTag]);

  return (
    <>
      <p className="mt-3 mb-0">حجم الخط</p>
      <div className="choose-font-size d-flex justify-content-between align-items-center mt-3 px-3">
        <span onClick={() => setFontSize("small")} className="small">
          صغير
        </span>
        <span onClick={() => setFontSize("medium")} className="medium">
          متوسط
        </span>
        <span onClick={() => setFontSize("large")} className="large">
          كبير
        </span>
      </div>
    </>
  );
};

export default CustomFontSize;
