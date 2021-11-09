import { useEffect, useState } from "react";
import getList from "../../calculator/getList";
import { calculPriceAfterSelect, endCalc } from "../../calculator/main";
import MakingInfo from "../MakingInfo/MakingInfo";
import MakingOprionsScrollbarsMobil from "../MakingOprionsScrollbarsMobil/MakingOprionsScrollbarsMobil";
import MakingOptionsMain from "../MakingOptionsMain/MakingOptionsMain";

const MakingOptions = (props) => {
  // ======Price Caclulation

  // priceAfterSelect временный, пока не появится более высокоуровневые данные цены
  const [priceAfterSelect, setPriceAfterSelect] = useState(0);

  const [priceEnd, setPriceEnd] = useState(0);

  const [priceList, setPriceList] = useState([]);

  const getPriceList = (index, price) => {
    getList(priceList, index, "price", price, setPriceList);
  };

  useEffect(() => {
    // стартовое заполнение priceList
    let data = [];
    for (let i = 0; i < props.calcData.PROGRESSBAR.length; i++) {
      data[i] = {
        index: (priceList.index = i),
        price: (priceList.price =
          props.calcData.PROGRESSBAR[i].DATA_PROGRESSBAR.PRICE *
          props.calcData.PROGRESSBAR[i].DATA_PROGRESSBAR.DEFAULT_VALUE),
        id: props.calcData.PROGRESSBAR[i].ID,
      };
    }
    setPriceList(data);
  }, []);

  const calculPriceEnd = () => {
    setPriceEnd(endCalc(priceList, "price"));
  };

  useEffect(() => {
    calculPriceEnd();
  }, [priceList]);

  // ====Date Calculation
  const [daysEnd, setDaysEnd] = useState(0);

  const [daysList, setDaysList] = useState([]);

  const getDaysList = (index, days) => {
    getList(daysList, index, "days", days, setDaysList);
  };

  useEffect(() => {
    // стартовое заполнение daysList
    let data = [];
    for (let i = 0; i < props.calcData.PROGRESSBAR.length; i++) {
      data[i] = {
        index: (daysList.index = i),
        days: (daysList.days =
          props.calcData.PROGRESSBAR[i].DATA_PROGRESSBAR.DAYS_IN_COUNT *
          props.calcData.PROGRESSBAR[i].DATA_PROGRESSBAR.DEFAULT_VALUE),
        id: props.calcData.PROGRESSBAR[i].ID,
      };
    }
    setDaysList(data);
  }, []);

  const calculDaysEnd = () => {
    setDaysEnd(endCalc(daysList, "days"));
  };

  useEffect(() => {
    calculDaysEnd();
  }, [daysList]);

  // =====added calculations

  // input calculation
  const [selectPriceData, setSelectPriceData] = useState();

  const getSelectPrice = (priceData) => {
    setSelectPriceData(priceData);
  };

  useEffect(() => {
    if (selectPriceData) {
      debugger
      let data = priceEnd
      setPriceAfterSelect(
        calculPriceAfterSelect(
          data,
          selectPriceData.price,
          selectPriceData.sign,
          selectPriceData.measure
        ))
      
    }else{
      setPriceAfterSelect(priceEnd);
    }
    
  }, [selectPriceData, priceEnd]);

  return (
    <div className="matchmaking__bottom-inner matchmaking__bottom-inner-card2">
      <MakingOptionsMain
        list={props.positionList}
        isExtraOptions={props.calcData.IS_EXTRA_OPTIONS}
        isInput={props.calcData.IS_INPUT}
        input={props.calcData.INPUT}
        options={props.calcData.EXTRA_OPTIONS}
        progressbar={props.calcData.PROGRESSBAR}
        getPriceList={getPriceList}
        getDaysList={getDaysList}
        getSelectPrice={getSelectPrice}
      />

      <div className="matchmaking__info-wrapper">
        <MakingOprionsScrollbarsMobil />
        <MakingInfo
          addClass={"matchmaking__info-card2"}
          description={props.description}
          priceEnd={priceAfterSelect}
          daysEnd={daysEnd}
        />
      </div>
    </div>
  );
};

export default MakingOptions;
