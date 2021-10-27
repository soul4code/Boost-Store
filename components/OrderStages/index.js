const OrderStages = (props) => {
  
  let widthBg = {width: `38.5%`};

  if (props.width) {
    widthBg = {
      width: `${props.width}%`,
    };
  }

  return (
    <>
      <div className="stage-list">
        <div className="stage-list__item stage-list__item1 active">
          <p>Stage 1</p>
        </div>
        <div className="stage-list__item stage-list__item2 active">
          <p>Stage 2</p>
        </div>
        <div className="stage-list__item stage-list__item3">
          <p>Stage 3</p>
        </div>
        <div className="stage-list__bg" style={widthBg}></div>
      </div>
      <div className="stage__top-text">{props.info}</div>
    </>
  );
};

export default OrderStages;
