import { useEffect, useState } from "react";

const CustomColor = () => {
  const htmlTag = document.querySelector("html");
  const [color, setColor] = useState("blue");

  useEffect(() => {
    htmlTag.setAttribute("data-color", color);
  }, [color, htmlTag]);

  return (
    <>
      <p className="mt-3 mb-0">اللون الأساسي</p>
      <div className="choose-color d-flex justify-content-between align-items-center mt-3 px-3">
        <span onClick={() => setColor("blue")} className="blue"></span>
        <span onClick={() => setColor("green")} className="green"></span>
        <span onClick={() => setColor("red")} className="red"></span>
        <span onClick={() => setColor("orange")} className="orange"></span>
        <span onClick={() => setColor("purple")} className="purple"></span>
        <span onClick={() => setColor("honey")} className="honey"></span>
      </div>
    </>
  );
};

export default CustomColor;
