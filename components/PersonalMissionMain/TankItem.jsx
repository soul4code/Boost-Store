import itemBg from '../../images/tank/tank-bg.png'

const TankItem = (props) => {

  return (
    <>
      <div className="slide-tankLine-bg">
        <div className="swiper-slide-tankLine-bg-active"></div>
        <img
          className="swiper-slide-tankLine-bg"
          src={itemBg}
        />
      </div>
      <div className="slide-tankLine-content">
        <img src={props.imgSmall} alt="" />
        <div className="swiper-slide-tankName">{props.model}</div>

      </div>
    </>
  );
};

export default TankItem;
