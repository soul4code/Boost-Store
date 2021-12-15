import SelectedRank from "../SelectedRank/SelectedRank";
import MakingProgressbar from "../MakingProgressbar/MakingProgressbar";
import MakingArrs from "./MakingArrs";
import styled from "styled-components";
import { DEVICE } from "../../configs/breakpoints";
import debounce from "lodash.debounce";
import { useCallback, useMemo, useRef } from "react";

const MatchMakingProgressWrapper = styled.div`
  #matchmaking__progressbar {
    width: calc(100% - 16px);
  }

  .noUi-value {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 6px;
    transform: rotate(-90deg);
    max-width: 40px;
    width: 100%;
    flex: 1 1 auto;
    justify-self: flex-end;
    margin-top: 30px;
    margin-left: -20px;
    color: white;
  }

  .noUi-marker {
    background: white;
  }

  .noUi-handle {
    &.noUi-handle-lower {
      right: -12px;
    }
    &.noUi-handle-upper {
      right: -12px;
    }
    &:after,
    &:before {
      left: -27px;
    }
  }
  @media ${DEVICE.mobileL} {
    .noUi-handle {
      &.noUi-handle-upper,
      &.noUi-handle-lower {
        right: -15px;
      }
      &:after,
      &:before {
        left: -24px;
      }
    }
  }

  @media ${DEVICE.tablet} {
    .noUi-handle {
      &.noUi-handle-upper,
      &.noUi-handle-lower {
        right: -20px;
      }
      &:after,
      &:before {
        left: -19px;
      }
    }
  }

  @media ${DEVICE.laptop} {
    .noUi-handle {
      &.noUi-handle-lower,
      &.noUi-handle-upper {
        right: -34px;
      }
      &:after,
      &:before {
        left: -5px;
      }
    }
    #matchmaking__progressbar {
      width: calc(100% - 30px);
    }
  }
`;

const MakingProgressMain = (props) => {
  const progressRef = useRef();
  const orderProps = props.order?.orderProps;
  const changeByProgressBarHandler = useCallback(
    (start, end) => props.onChangeOrderProps({ start: +start, end: +end }),
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
        {![NaN, undefined].includes(orderProps?.start) && (
          <SelectedRank
            positionList={props.POSITION_LIST}
            value={orderProps?.start}
            title={"Сurrent rank"}
            onChange={(start) => {
              progressRef.current.set({ start: +start });
              props.onChangeOrderProps({ start: +start });
            }}
          />
        )}

        <MakingArrs />

        {![NaN, undefined].includes(orderProps?.end) && (
          <SelectedRank
            positionList={props.POSITION_LIST}
            value={orderProps?.end}
            title={"Desired rank"}
            isReverse={true}
            onChange={(end) => {
              progressRef.current.set({ end: +end });
              props.onChangeOrderProps({ end: +end });
            }}
          />
        )}
      </div>
      {orderProps && (
        <MakingProgressbar
          ref={progressRef}
          list={scalePositionsList}
          startValue={orderProps?.start}
          endValue={orderProps?.end}
          maxValue={props.MAX_VALUE}
          minValue={props.MIN_VALUE}
          step={props.STEP}
          price={props.PRICE}
          onChange={changeByProgressBarHandler}
        />
      )}
    </MatchMakingProgressWrapper>
  );
};

export default MakingProgressMain;
