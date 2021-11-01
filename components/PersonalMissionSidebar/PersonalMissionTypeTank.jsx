import { useState } from "react";

const PersonalMissionTypeTank = ({ title, icon, getCurrentType, isActive }) => {

  return (
    <div
      className={`matchmaking__card3-class-label ${isActive ? "active" : ""}`}
      onClick={() => getCurrentType(title)}
    >
      <img src={icon} alt="" />
      <span className="checkbox-text matchmaking__card3-class-checkbox-text">
        {title}
      </span>
    </div>
  );
};

export default PersonalMissionTypeTank;
