import { useEffect, useState } from "react";

const PersonalMissionTypeTank = ({
  index,
  title,
  icon,
  setCurrentTypeItem,
  currentTypeItem,
}) => {


  const [isActive, setIsActive] = useState(currentTypeItem);

  useEffect(() => {
    setIsActive(currentTypeItem);
  }, [currentTypeItem]);

  return (
    <div
      className={`matchmaking__card3-class-label ${
        index === isActive && "active"
      }`}
      onClick={() => {
        setCurrentTypeItem(index);
      }}
    >
      <img src={icon} alt="" />
      <span className="checkbox-text matchmaking__card3-class-checkbox-text">
        {title}
      </span>
    </div>
  );
};

export default PersonalMissionTypeTank;
