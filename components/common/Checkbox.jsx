const Checkbox = ({
  children,
  text,
  action,
  circle = false,
  id,
  index,
  sign='+',
  description = "",
  measure = "$",
  price,
}) => {
  
  const getData = (e) => {
    const data = {
      id,
      description,
      sign,
      measure,
      price,
      checked: e.target.checked
    };
    action(data,index)
  };

  return (
    <label onChange={(e) => getData(e)}>
      <input className="options-checkbox-input" type="checkbox" />
      <span
        className={`checkbox-circle ${circle ? "checkbox-circle-circle" : ""}`}
      ></span>
      <span className="checkbox-text">{text}</span>
      {children}
    </label>
  );
};

export default Checkbox;
