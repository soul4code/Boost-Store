const Input = ({setValue, value, type, placeholder, required, minLength}) => {

  const getValue = (e) =>{
    setValue(e.target.value)
  }

  return (
    <>
      <div className={"auth__input-block"}>
        <label className="stage2__form-item auth__label">
          <input
            className="stage2__form-item auth__input"
            onChange={(e)=>getValue(e)}
            value={value}
            type={type}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
          />
        </label>
      </div>
    </>
  );
};
export default Input;
