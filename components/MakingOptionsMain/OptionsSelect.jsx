import InputDarkBlue from "../InputDarkBlue/InputDarkBlue";
import SelectDarkBlue from "../common/SelectDarkBlue/SelectDarkBlue";
import { useEffect, useState } from "react";

const OptionsSelect = (props) => {
  console.log(props);

  const [localPrice, setLocalPrice] = useState();

  const calcPrice = (id) => {
    const selectedItem = props.SELECT_LIST.filter((i) => i.ID === id);
    if (selectedItem[0].IS_PRICE) {
      const priceData = {
        price: selectedItem[0].PRICE,
        sign: selectedItem[0].SIGN,
        measure: selectedItem[0].MEASURE,
      };
      setLocalPrice(priceData)
    } else{
        setLocalPrice(null)
    }
  };

  useEffect(()=>{
    props.getSelectPrice(localPrice)
  },[localPrice])

  return (
    <>
      <div className={`subtitle__page`}>{props.TITLE}</div>
      {props.IS_SELECT ? (
        <div className={`matchmaking__options-input`}>
          <SelectDarkBlue
            list={props.SELECT_LIST}
            defaultValue={props.HEADER}
            doSelect={calcPrice}
            isSelectIndex={false}
          />
        </div>
      ) : (
        <div className={`matchmaking__options-input`}>
          <InputDarkBlue
            defaultValue={10}
            action={console.log(1)}
            currentValue={1}
            type={Number}
          />
        </div>
      )}
    </>
  );
};

export default OptionsSelect;
