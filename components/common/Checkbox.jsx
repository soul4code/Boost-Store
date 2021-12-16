import styled from "styled-components";

const CheckBoxWrapper = styled.label`
  input[checked] + .checkbox-circle::after {
    opacity: 1;
  }
`;

const Checkbox = ({
  children,
  text,
  action,
  circle = false,
  id,
  index,
  sign = "+",
  description = "",
  measure = "$",
  price,
  checked = false,
}) => {
  const getData = (e) => {
    const data = {
      id,
      description,
      sign,
      measure,
      price,
      checked: e.target.checked,
    };
    action(data, index);
  };

  return (
    <CheckBoxWrapper onChange={(e) => getData(e)}>
      <input
        className="options-checkbox-input"
        type="checkbox"
        defaultChecked={checked}
      />
      <span
        className={`checkbox-circle ${circle ? "checkbox-circle-circle" : ""}`}
      />
      <span className="checkbox-text">{text}</span>
      {children}
    </CheckBoxWrapper>
  );
};

export default Checkbox;
