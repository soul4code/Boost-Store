const Enum = ({title='Price', num=1000, isLarge=false, measure='$'}) => {
  return (
    <div className="enum enum__matchmaking">
      <div className="enum__title">{title}</div>
      <div className="enum__dots">
        .................................................................................................................
      </div>
      <div className={`enum__result ${isLarge ? 'enum__result-matchmaking' : ''} `}>{num}{measure}</div>
    </div>
  );
};

export default Enum;
