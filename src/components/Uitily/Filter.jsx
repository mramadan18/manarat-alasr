import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = ({ isList, setIsList }) => {
  console.log(isList);
  return (
    <div className="filter my-4 d-flex justify-content-between align-items-center gap-5">
      <div className="icons w-25 d-flex justify-content-around align-items-center gap-4">
        <FontAwesomeIcon
          icon={faTh}
          className={`fs-5 ${isList ? "text-black" : "text-main"}`}
          onClick={() => setIsList(false)}
        />
        <FontAwesomeIcon
          icon={faThList}
          className={`fs-5 ${isList ? "text-main" : "text-black"}`}
          onClick={() => setIsList(true)}
        />
      </div>
      <div className="sort w-75 d-flex justify-content-center align-items-center gap-4">
        <label htmlFor="sorting" className="fs-5">
          الفرز
        </label>
        <select className="form-control w-100">
          <option>الافتراضي</option>
          <option>الإسم من أ - ي</option>
          <option>الإسم من ي - أ</option>
          <option>حسب السعر (منخفض &gt; مرتفع)</option>
          <option>حسب السعر (مرتفع &gt; منخفض)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
