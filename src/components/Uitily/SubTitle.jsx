import { Link } from "react-router-dom";

const SubTitle = ({ title, titleBtn, sizeTitle, path }) => {
  return (
    <div className="d-flex justify-content-between align-items-center py-2">
      <div className={`sub-title ${sizeTitle}`}>{title}</div>
      {titleBtn ? (
        <Link to={path}>
          <div className="btn bg-main py-0">{titleBtn}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
