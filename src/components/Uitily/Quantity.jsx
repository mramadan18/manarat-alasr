import { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      <button
        className={`btn bg-main btn-sm  d-flex justify-content-center align-items-center p-0 fs-5 ${
          count === 1 && "disabled"
        }`}
        style={{ width: "30px", height: "30px" }}
        onClick={decrementCount}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="btn bg-main btn-sm d-flex justify-content-center align-items-center p-0 fs-5"
        style={{ width: "30px", height: "30px" }}
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
