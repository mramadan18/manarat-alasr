import Brand from "./Brand";

const BrandsList = () => {
  return (
    <div className="brands-list py-4">
      <div className="container">
        <div className="row">
          <Brand img={"images/brands/brand-1.png"} />
          <Brand img={"images/brands/brand-2.png"} />
          <Brand img={"images/brands/brand-3.jpeg"} />
          <Brand img={"images/brands/brand-4.jpeg"} />
          <Brand img={"images/brands/brand-5.jpeg"} />
          <Brand img={"images/brands/brand-6.png"} />
        </div>
      </div>
    </div>
  );
};

export default BrandsList;
