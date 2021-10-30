const ImgTankItem = (props) => {
  return (
    <>
      <img src={props.imgLarge} alt="" />
      <div className={`unvisible-div`}>{props.model}</div>
    </>
  );
};

export default ImgTankItem;
