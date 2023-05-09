const InputUnrequired = ({ type, placeholder }) => {
  return (
    <div className="input-container position-relative mb-2">
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="form-control"
      />
    </div>
  );
};

export default InputUnrequired;
