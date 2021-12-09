import SelectedRank from "../SelectedRank/SelectedRank";
import MakingProgressbar from "../MakingProgressbar/MakingProgressbar";
import MakingArrs from "./MakingArrs";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { DEVICE } from "../../configs/breakpoints";

const MatchMakingProgressWrapper = styled.div`
  .noUi-handle {
    &.noUi-handle-lower {
      right: -22px;
    }
    &.noUi-handle-upper {
      right: 0;
    }
  }

  @media ${DEVICE.mobileL} {
    .noUi-handle {
      &.noUi-handle-lower {
        right: -24px;
      }
      &.noUi-handle-upper {
        right: -6px;
      }
    }
  }

  @media ${DEVICE.tablet} {
    .noUi-handle {
      &.noUi-handle-upper {
        right: -17px;
      }
    }
  }

  @media ${DEVICE.laptop} {
    .noUi-handle {
      &.noUi-handle-lower {
        right: -53px;
      }
    }
  }
`;

const MakingProgressMain = (props) => {
  const [startValue, setStartValue] = useState(props.DEFAULT_VALUE_FIRST);
  const [endValue, setEndValue] = useState(props.DEFAULT_VALUE_SECOND);

  const onChangeByProgressBar = useCallback(
    (start, end) => {
      setStartValue(start);
      setEndValue(end);
    },
    [setStartValue, setEndValue]
  );

  useEffect(() => {
    props.getBasePrice([startValue, endValue]);
  }, [startValue, endValue, props.getBasePrice]);

  return (
    <MatchMakingProgressWrapper className="matchmaking__progress">
      <div className="matchmaking__progress-block">
        <SelectedRank
          positionList={props.POSITION_LIST}
          value={startValue}
          title={"Сurrent rank"}
          onChange={setStartValue}
        />

        <MakingArrs />

        <SelectedRank
          positionList={props.POSITION_LIST}
          value={endValue}
          title={"Desired rank"}
          isReverse={true}
          onChange={setEndValue}
        />
      </div>
      <MakingProgressbar
        list={props.POSITION_LIST}
        startValue={startValue}
        endValue={endValue}
        maxValue={props.MAX_VALUE}
        minValue={props.MIN_VALUE}
        step={props.STEP}
        price={props.PRICE}
        onChange={onChangeByProgressBar}
      />
    </MatchMakingProgressWrapper>
  );
};

export default MakingProgressMain;
