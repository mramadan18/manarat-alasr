import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPencilAlt,
  faPlusCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const BtnRemoveAndSortComp = ({ target }) => {
  const handleRemoveComponent = () => {
    target.current.classList.add("remove");
    setTimeout(() => {
      target.current.remove();
    }, 1000);
  };

  const handleDragIcon = () => {
    target.current.setAttribute("draggable", "true");
    target.current.style.boxShadow = "10px 10px 10px rgba(33, 33, 33, 0.2)";
  };

  return (
    <div className="position-relative">
      <div className="icon-plus position-absolute top-0 start-50">
        <FontAwesomeIcon icon={faPlusCircle} size="lg" />
      </div>
      <div className="icons d-flex justify-content-start align-items-center gap-3 px-3 mb-4">
        <FontAwesomeIcon icon={faTimes} onClick={handleRemoveComponent} />
        <FontAwesomeIcon icon={faPencilAlt} />
        <FontAwesomeIcon icon={faList} onClick={handleDragIcon} />
      </div>
    </div>
  );
};

export default BtnRemoveAndSortComp;
