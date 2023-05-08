const Coupon = () => {
  return (
    <div className="coupon d-flex justify-content-between align-items-center gap-1 my-3">
      <input
        type="text"
        placeholder="الرجاء ادخال كوبون الصخم هنا..."
        className="form-control"
      />
      <button className="btn bg-main rounded-3" style={{ width: "170px" }}>
        اعتمد الكوبون
      </button>
    </div>
  );
};

export default Coupon;
