const InputRequired = ({ type, placeholder }) => {
  return (
    <div className="input-container position-relative mb-2">
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        autoComplete="off"
        required
      />
      <span className="addStar position-absolute">*</span>
    </div>
  );
};

export default InputRequired;
