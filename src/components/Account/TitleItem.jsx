import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleItem = ({ title, icon }) => {
  return (
    <div className="account-item d-flex justify-content-center align-items-center gap-2 py-1 rounded-3 w-50 border-main-2 mb-2">
      <FontAwesomeIcon icon={icon} />
      <span className="fs-5">{title}</span>
    </div>
  );
};

export default TitleItem;
