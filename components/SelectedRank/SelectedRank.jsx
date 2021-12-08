import { useEffect, useState } from "react";
import { SelectedRankInput } from "./SelectedRankInput";
import styled from "styled-components";

const RankDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`;

const RatingDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`;

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
      <RatingDescriptionWrapper
        className={"matchmaking__progress-block-wrapper-reverse"}
      >
        <RankDescription className="matchmaking__progress-block-box subtitle__page">
          <p>{title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </RankDescription>
        <SelectedRankInput
          value={value === undefined ? +defaultValue : +value}
          onChange={onChange}
        />
      </RatingDescriptionWrapper>
    );
  } else {
    return (
      <RatingDescriptionWrapper
        className={"matchmaking__progress-block-wrapper"}
      >
        <RankDescription className="matchmaking__progress-block-box subtitle__page">
          <p>{title}</p>
          <div className="matchmaking__progress-rank-img">
            <img src={imgCurrentRank} alt="" />
          </div>
        </RankDescription>

        <SelectedRankInput
          value={value === undefined ? +defaultValue : +value}
          onChange={onChange}
        />
      </RatingDescriptionWrapper>
    );
  }
};

export default SelectedRank;
