const CustomMode = () => {
  return (
    <>
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
    </>
  );
};

export default CustomMode;
