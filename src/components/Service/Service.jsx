import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = ({ icon, title }) => {
  return (
    <div className="col-6 col-lg-3">
      <div className="service text-center border-main-1 py-4 mb-2">
        <FontAwesomeIcon icon={icon} className="fs-3 mb-2" />
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default Service;
