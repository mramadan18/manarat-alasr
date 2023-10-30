import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPencilAlt,
  faPlusCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const BtnRemoveAndSortComp = () => {
  return (
    <div className="position-relative">
      <div className="icon-plus position-absolute top-0 start-50">
        <FontAwesomeIcon icon={faPlusCircle} size="lg" />
      </div>
      <div className="icons d-flex justify-content-start align-items-center gap-3 px-3 mb-4">
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faPencilAlt} />
        <FontAwesomeIcon icon={faList} />
      </div>
    </div>
  );
};

export default BtnRemoveAndSortComp;
