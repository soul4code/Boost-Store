import { useEffect, useState } from "react";

const InputDarkBlue = ({ defaultValue, action, currentValue, type }) => {
  const [value, setValue] = useState();
  const getValue = (e) => {
    setValue(e);
    action && action(e);
  };

  useEffect(() => {
    const getStartValue = ((defaultValue) => {
      setValue(defaultValue);
      action && action(defaultValue);
    })(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (type === Number) {
      setValue(+currentValue);
    } else {
      setValue(currentValue);
    }
  }, [currentValue]);

  return (
    <div className={"input__darkBlue-box"}>
      <input
        className={"input__darkBlue"}
        type="text"
        value={value}
        onChange={(e) => getValue(e.target.value)}
        />
    </div>
  );
};

export default InputDarkBlue;
