import SelectedRank from "../SelectedRank/SelectedRank";
import MakingProgressbar from "../MakingProgressbar/MakingProgressbar";
import MakingArrs from "./MakingArrs";
import styled from "styled-components";
import { DEVICE } from "../../configs/breakpoints";
import debounce from "lodash.debounce";
import { useMemo } from "react";

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
  const orderProps = props.order?.orderProps;
  const changeByProgressBarHandler = (start, end) => {
    props.onChangeOrderProps({ start, end });
  };

  const onChangeByProgressBar = useMemo(
    () => debounce(changeByProgressBarHandler, 100),
    [props.onChangeOrderProps]
  );

  const scalePositionsList = useMemo(() => {
    if (props.IS_POSITION_LIST) {
      return props.POSITION_LIST;
    }
    const positionsCount = (props.MAX_VALUE - props.MIN_VALUE) / props.DENSITY;
    return [...Array(positionsCount + 1).keys()].map((i) => ({
      ID: i,
      TEXT: `${i * props.DENSITY + props.MIN_VALUE}`,
    }));
  }, [props.IS_POSITION_LIST, props.POSITION_LIST]);

  return (
    <MatchMakingProgressWrapper className="matchmaking__progress">
      <div className="matchmaking__progress-block">
        <SelectedRank
          positionList={props.POSITION_LIST}
          value={orderProps?.start}
          title={"Сurrent rank"}
          onChange={(start) => props.onChangeOrderProps({ start })}
        />

        <MakingArrs />

        <SelectedRank
          positionList={props.POSITION_LIST}
          value={orderProps?.end}
          title={"Desired rank"}
          isReverse={true}
          onChange={(end) => props.onChangeOrderProps({ end })}
        />
      </div>
      <MakingProgressbar
        list={scalePositionsList}
        startValue={orderProps?.start}
        endValue={orderProps?.end}
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
