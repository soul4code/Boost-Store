import { useEffect, useState } from "react";

const InputDarkBlue = ({defaultValue}) => {
  const [value, setValue] = useState();
  const getValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const getStartValue = (defaultValue) => {
        setValue(defaultValue);
    };
    getStartValue(defaultValue)
  }, [defaultValue]);

  return <div className={'input__darkBlue-box'}>
      <input className={'input__darkBlue'} type='text' value={value} onChange={(e)=>getValue(e)}></input>
  </div>
  
};

export default InputDarkBlue;
