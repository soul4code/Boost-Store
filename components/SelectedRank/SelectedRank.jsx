import { useEffect, useState } from "react";
import SelectDarkBlue from "../SelectDarkBlue/SelectDarkBlue";

const SelectedRank = (props) => {
  const [selectRank, setSelectRank] = useState();

  const getSelectRank = (rankId) => {
    setSelectRank(rankId);
  };

  const [imgCurrentRank, setImgCurrentRank] = useState();
  useEffect(() => {
    const toggleImg = () => {
      let currentRankData = props.positionList.filter(
        (rank) => rank.ID === selectRank
      );
      if (currentRankData.length > 0) {
        setImgCurrentRank(currentRankData[0].IMG);
      }
    };
    toggleImg();
  }, [selectRank]);

  if (props.isReverse) {
    return (
      <div className={'matchmaking__progress-block-wrapper'}>
        <SelectDarkBlue
          list={props.positionList}
          defaultValue={props.positionList[0].TEXT}
          doSelect={getSelectRank}
        />
        <div className="matchmaking__progress-block-box subtitle__page">
          <p>{props.title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className={'matchmaking__progress-block-wrapper'}>
        <div className="matchmaking__progress-block-box subtitle__page">
          <p>{props.title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </div>

        <SelectDarkBlue
          list={props.positionList}
          defaultValue={props.positionList[0].TEXT}
          doSelect={getSelectRank}
        />
      </div>
    );
  }
};

export default SelectedRank;
