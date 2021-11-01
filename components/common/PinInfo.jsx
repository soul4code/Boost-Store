// icon - default = i

const PinInfo = ({icon='i', description}) => {
  return (
    <div className="checkbox-info checkbox-info-card3">
      <span>{icon}</span>
      <div className="checkbox-info-text">
        <p>
          {description}
        </p>
        <img src="img/matchmaking/info-bg.svg" alt="" />
      </div>
    </div>
  );
};

export default PinInfo;
