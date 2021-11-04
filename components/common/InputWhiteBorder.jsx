const InputWhiteBorder = ({
  placeholder,
  type = "text",
  addClass = "",
  required = false,
  setValue,
  minLength
}) => {
    
  return (
    <label className={`modal__label ${addClass}`}>
      <input
        className={"modal__input"}
        type={type}
        required={required}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        minLength={minLength}
      />
      <span className={"modal__placeholder"}>{placeholder}</span>
    </label>
  );
};

export default InputWhiteBorder;
