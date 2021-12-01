import { useEffect, useState } from "react";
import SelectDarkBlue from "../common/SelectDarkBlue/SelectDarkBlue";

const SelectedRank = ({positionList, title, isReverse, action}) => {
  const [selectRank, setSelectRank] = useState();

  const getSelectRank = (id,index) => {
    action(index);
    setSelectRank(id)
  };

  const [imgCurrentRank, setImgCurrentRank] = useState();
  useEffect(() => {
    const toggleImg = () => {
      let currentRankData = positionList.filter(
        (rank) => rank.ID === selectRank
      );
      if (currentRankData.length > 0) {
        setImgCurrentRank(currentRankData[0].IMG);
      }
    };
    toggleImg();
  }, [selectRank]);

  if (isReverse) {
    return (
      <div className={'matchmaking__progress-block-wrapper'}>
        <SelectDarkBlue
          list={positionList}
          defaultValue={positionList[0].TEXT}
          doSelect={getSelectRank}
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
        <div className={'matchmaking__progress-block-wrapper'}>
        <div className="matchmaking__progress-block-box subtitle__page">
          <p>{title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </div>

        <SelectDarkBlue
          list={positionList}
          defaultValue={positionList[0].TEXT}
          doSelect={getSelectRank}
        />
      </div>
    );
  }
};

export default SelectedRank;
