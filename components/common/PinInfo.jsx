import Image from 'next/image'

// icon - default = i

const PinInfo = ({icon='i', description, alt=''}) => {
  return (
    <div className="checkbox-info checkbox-info-card3">
      <span>{icon}</span>
      <div className="checkbox-info-text">
        <p>
          {description}
        </p>
        <Image src={'/img/matchmaking/info-bg.svg'} alt={alt} layout="fill"/>
      </div>
    </div>
  );
};

export default PinInfo;
