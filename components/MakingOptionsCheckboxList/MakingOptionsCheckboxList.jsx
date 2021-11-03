import { useState } from "react";
import Checkbox from "../common/Checkbox";

const MakingOptionsCheckboxList = ({addClass}) => {
  const [selected, setSelected] = useState();

  const getState = (e) => {
    setSelected(e);
  };
  return (
    <div className={`options-checkbox ${addClass}`}>
      <Checkbox text={"1 lvl"} circle={true} action={getState} />
      <Checkbox text={"2 lvl"} circle={true} action={getState} />
      <Checkbox text={"3 lvl"} circle={true} action={getState} />
      <Checkbox text={"4 lvl"} circle={true} action={getState} />
    </div>
  );
};

export default MakingOptionsCheckboxList;
