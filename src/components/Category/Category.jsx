import { Link } from "react-router-dom";

const Category = ({ img, title }) => {
  return (
    <Link
      to="/categories"
      className="category d-flex flex-column justify-content-center align-items-center"
    >
      <img src={img} alt={title} style={{ width: "80px" }} />
      <span className="mt-3 fs-6">{title}</span>
    </Link>
  );
};

export default Category;
