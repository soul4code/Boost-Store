import { useEffect, useState } from "react";
import { SelectedRankInput } from "./SelectedRankInput";

const SelectedRank = ({
  positionList,
  title,
  isReverse,
  onChange,
  value,
  defaultValue,
}) => {
  const [selectRank, setSelectRank] = useState();

  const [imgCurrentRank, setImgCurrentRank] = useState();

  useEffect(() => {
    const position = positionList.find(
      ({ MIN, MAX }) => +value >= MIN && +value <= MAX
    );
    if (position) {
      setSelectRank(position.ID);
    }
  }, [value, setSelectRank, positionList]);

  useEffect(() => {
    let currentRankData = positionList.find((rank) => rank.ID === selectRank);
    if (currentRankData) {
      setImgCurrentRank(currentRankData.IMG);
    }
  }, [selectRank, positionList, setImgCurrentRank]);

  if (isReverse) {
    return (
      <div className={"matchmaking__progress-block-wrapper"}>
        <SelectedRankInput
          value={value === undefined ? +defaultValue : +value}
          onChange={onChange}
        />
        <div className="matchmaking__progress-block-box subtitle__page">
          <p>{title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"matchmaking__progress-block-wrapper"}>
        <div className="matchmaking__progress-block-box subtitle__page">
          <p>{title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </div>

        <SelectedRankInput
          value={value === undefined ? +defaultValue : +value}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default SelectedRank;
