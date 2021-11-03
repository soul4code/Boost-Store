const Checkbox = ({ children, text, action, circle=false }) => {
  
  return (
    <label
      onChange={
        (e)=>action(e)
      }
    >
      <input className="options-checkbox-input" type="checkbox" />
      <span className={`checkbox-circle ${circle ? 'checkbox-circle-circle' : ''}`}></span>
      <span className="checkbox-text">{text}</span>
      {children}
    </label>
  );
};

export default Checkbox;
