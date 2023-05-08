import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Item = ({ title, icon, path }) => {
  return (
    <Link
      to={path}
      className="account-item d-flex justify-content-center align-items-center gap-2 py-1 rounded-3 w-50 border border-1 border-dark mb-2"
    >
      <FontAwesomeIcon className="text-black" icon={icon} />
      <span>{title}</span>
    </Link>
  );
};

export default Item;
