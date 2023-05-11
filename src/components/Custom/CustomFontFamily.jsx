import { useEffect, useState } from "react";

const CustomFontFamily = () => {
  const htmlTag = document.querySelector("html");
  const [fontFamily, setFontFamily] = useState("mothnna");

  useEffect(() => {
    htmlTag.setAttribute("data-font-family", fontFamily);
  }, [fontFamily, htmlTag]);

  return (
    <>
      <p className="mt-3 mb-0">نوع الخط</p>
      <div className="choose-font-family d-flex justify-content-between align-items-center mt-3 px-3">
        <span onClick={() => setFontFamily("cairo")} className="cairo">
          كايرو
        </span>
        <span onClick={() => setFontFamily("mothnna")} className="mothnna">
          موزانا
        </span>
        <span onClick={() => setFontFamily("cortoba")} className="cortoba">
          كورتوبا
        </span>
      </div>
    </>
  );
};

export default CustomFontFamily;
