import { useEffect } from "react";
import InputDarkBlue from "../common/InputDarkBlue/InputDarkBlue";
import SelectDarkBlue from "../common/SelectDarkBlue/SelectDarkBlue";
import OptionsSelect from "./OptionsSelect";

const OptionsSelectList = (props) => {

  let list
  if(props.input){
    console.log(props.input)
    list = props.input.map(i=>(
      <OptionsSelect {...i} key={i.ID} getSelectPrice={props.getSelectPrice}/>
    ))
  }

  return (
    <>
    {list}
    </>
  );
};

export default OptionsSelectList;
