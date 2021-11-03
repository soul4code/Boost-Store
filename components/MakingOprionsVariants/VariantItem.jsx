import { useState } from "react";
import SelectDarkBlue from "../SelectDarkBlue/SelectDarkBlue";

const VariantItem = ({list, defaultValue}) => {
    const [selected, setSelected]=useState()

    const getSelected = (id)=>{
      setSelected(id)
    }
  return (
    <div className="matchmaking__options-card2-item">
      <div className="progress-current-select">
          <SelectDarkBlue list={list} defaultValue={defaultValue} doSelect={getSelected}/>
      </div>
    </div>
  );
};

export default VariantItem;
