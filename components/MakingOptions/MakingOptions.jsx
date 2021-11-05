import { useEffect, useState } from "react";
import { endCalc } from "../../calculator/main";
import MakingInfo from "../MakingInfo/MakingInfo";
import MakingOprionsScrollbarsMobil from "../MakingOprionsScrollbarsMobil/MakingOprionsScrollbarsMobil";
import MakingOptionsMain from "../MakingOptionsMain/MakingOptionsMain";

const MakingOptions = (props) => {
  const [priceEnd, setPriceEnd] = useState(0);

  const calculPriceEnd = () => {
    setPriceEnd(endCalc(priceList));
  };

  const [priceList, setPriceList] = useState([]);
  const getPriceList = (index, price) => {
    setPriceList(
      priceList.map((i) => {
        if (index === i.index) {
          return {
            ...i,
            price: price,
          };
        }
        if (index !== i.index) {
          return { ...i };
        }
      })
    );
  };

  const [daysEnd, setDaysEnd]=useState(0)
  const calculDaysEnd = ()=>{
    setDaysEnd(endCalc(daysEnd))
  }

  useEffect(() => {
    let data = [];
    for (let i = 0; i < props.calcData.progressbar.length; i++) {
      data[i] = {
        index: (priceList.index = i),
        price: (priceList.price =
          props.calcData.progressbar[i].dataProgressbar.price *
          props.calcData.progressbar[i].dataProgressbar.defaultValue),
        data: props.calcData.progressbar[i].id,
      };
    }
    setPriceList(data);
  }, []);

  useEffect(() => {
    calculPriceEnd();
  }, [priceList]);

  return (
    <div className="matchmaking__bottom-inner matchmaking__bottom-inner-card2">
      <MakingOptionsMain
        list={props.positionList}
        isExtraOptions={props.isExtraOptions}
        input={props.calcData.input}
        options={props.calcData.options}
        progressbar={props.calcData.progressbar}
        getPriceList={getPriceList}
        
      />

      <div className="matchmaking__info-wrapper">
        <MakingOprionsScrollbarsMobil />
        <MakingInfo
          addClass={"matchmaking__info-card2"}
          description={props.description}
          priceEnd={priceEnd}
          daysEnd={daysEnd}
        />
      </div>
    </div>
  );
};

export default MakingOptions;
