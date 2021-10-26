const Input = (props) => {
  return (
    <>
      <div className={"auth__input-block"}>
        <label className="stage2__form-item auth__label">
          <input
            className="stage2__form-item auth__input"
            onChange={(e)=>props.setValue(e.target.value)}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            minLength={props.minLength}
          />
        </label>
      </div>
    </>
  );
};
export default Input;
