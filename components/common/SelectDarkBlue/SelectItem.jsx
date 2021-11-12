const SelectItem = ({
  action,
  text,
  id,
  index,
  isSelectIndex,
  addAction,
  priceData,
}) => {

  const actionCompiller = (e) => {
    if (action) {
      action(e);
    }
    if (addAction) {
      if (isSelectIndex) {
        addAction(index);
      } else {
        addAction(id);
      }
    }
  };

  if (priceData.IS_PRICE) {
    return (
      <div
        className="progress-matchmaking-item"
        onClick={(e) => {
          actionCompiller(e);
        }}
      >
        {text} ({priceData.SIGN}
        {priceData.PRICE}
        {priceData.MEASURE})
      </div>
    );
  } else {
    return (
      <div
        className="progress-matchmaking-item"
        onClick={(e) => {
          actionCompiller(e);
        }}
      >
        {text}
      </div>
    );
  }
};

export default SelectItem;
