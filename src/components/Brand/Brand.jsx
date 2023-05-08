const Brand = ({ img }) => {
  return (
    <div className="col-4 col-sm-3 col-lg-2">
      <div className="brand text-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Brand;
