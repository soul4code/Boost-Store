const Checkbox = ({ children, text, action }) => {
  
  return (
    <label
      onChange={
        (e)=>action(e)
      }
    >
      <input className="options-checkbox-input" type="checkbox" />
      <span className="checkbox-circle"></span>
      <span className="checkbox-text">{text}</span>
      {children}
    </label>
  );
};

export default Checkbox;
