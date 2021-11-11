const getList = (array, index, editName, data, useStateAction) => {
  debugger
  useStateAction(
    array.map((i) => {
      if (index === i.index) {
        let param = {
          ...i,
        };
        param[editName] = data;

        return param;
      }
      if (index !== i.index) {
        return { ...i };
      }
    })
  );
};
export default getList;

// Пример
// Старая запись, без инкапсуляции
// const [priceList, setPriceList] = useState([]);
// setPriceList(
//   priceList.map((i) => {
//     if (index === i.index) {
//       return {
//         ...i,
//         price: price,
//       };
//     }
//     if (index !== i.index) {
//       return { ...i };
//     }
//   })
// );

// Новая запись
//   const getPriceList = (index, price) => {
// getList(priceList, index, 'price', price, setPriceList)
//   };
