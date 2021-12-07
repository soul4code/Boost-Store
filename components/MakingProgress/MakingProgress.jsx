import { useEffect, useState } from "react";
import getList from "../../calculator/getList";
import MakingProgressFooter from "../MakingProgressFooter/MakingProgressFooter";
import MakingProgressMain from "../MakingProgressMain/MakingProgressMain";

const MakingProgress = (props) => {
  const [priceWithExtraOptions, setPriceWithExtraOptions] = useState();

  const [basePrice, setBasePrice] = useState(0);

  const [days, setDays] = useState(0);

  const getBasePrice = (e) => {
    let currentFirst = +e[0];
    let currentSecond = +e[1];
    let price = props.PRICE;
    let days = props.DAYS_IN_COUNT;
    let num = Math.round(currentSecond / 100) - Math.round(currentFirst / 100);
    setBasePrice(num * price);
    setDays(num * days);
  };

  const getBasePriceSelect = (price) => {
    setBasePrice(price);
  };

  useEffect(() => {
    const checkBasePriceIsNaN = (() => {
      if (isNaN(basePrice)) {
        setBasePrice(0);
        console.log(1);
      }
    })();
  }, [basePrice]);

  const [extraOptionsList, setExtraOptionsList] = useState([]);

  const getExtraOptionsList = (priceData, index) => {
    getList(extraOptionsList, index, "data", 40, setExtraOptionsList);
  };

  useEffect(() => {
    // стартовое заполнение extraOptionsList
    let data = [];
    for (let i = 0; i < props.EXTRA_OPTIONS.length; i++) {
      data[i] = {
        index: (extraOptionsList.index = i),
        data: props.EXTRA_OPTIONS[i],
      };
    }
    setExtraOptionsList(data);
  }, []);

  const [editOptionsPrice, setEditOptionsPrice] = useState([]);
  const [numOptionsPrice, setNumOptionsPrice] = useState([]);

  useEffect(() => {
    const getEditOptionsPrice = (() => {
      let data = [];
      data = extraOptionsList.map((i) => {
        if (i.data.checked) {
          return i.data;
        }
      });
      setEditOptionsPrice(data);
    })();
  }, [extraOptionsList, basePrice]);

  useEffect(() => {
    const getNumOptionsPrice = (() => {
      let numsList = [];
      numsList = editOptionsPrice.map((i) => {
        if (i) {
          return calculPriceAfterExtraOptions(
            priceEnd,
            i.price,
            i.sign,
            i.measure
          );
        }
      });
      setNumOptionsPrice(numsList);
    })();
  }, [editOptionsPrice]);

  return (
    <>
      <MakingProgressMain
        {...props}
        getBasePrice={getBasePrice}
        getBasePriceSelect={getBasePriceSelect}
      />
      <MakingProgressFooter
        description={props.DESCRIPTION}
        isExtraOptions={props.IS_EXTRA_OPTIONS}
        extraOptions={props.EXTRA_OPTIONS}
        price={basePrice}
        days={days}
        getExtraOptionsList={getExtraOptionsList}
      />
    </>
  );
};

export default MakingProgress;
