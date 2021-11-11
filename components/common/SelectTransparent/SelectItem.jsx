const SelectItem = ({ action, text }) => {
  return (
    <div className="select__form-item" onClick={action}>
      {text}
    </div>
  );
};

export default SelectItem;
