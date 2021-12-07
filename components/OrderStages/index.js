import Link from "next/link";
import styled from "styled-components";
import { useCallback } from "react";

const StagePointer = styled.p`
  cursor: pointer;
`;

const OrderStages = (props) => {
  let widthBg = { width: `38.5%` };

  if (props.width) {
    widthBg = {
      width: `${props.width}%`,
    };
  }

  const renderStageLink = useCallback(
    (stage) => {
      if (+stage >= +props.currentStage) {
        return <p>Stage {stage}</p>;
      }
      const href =
        +stage === 1 ? props.firstStageLink || "" : `/stages/${stage}/`;
      return (
        <Link href={href}>
          <StagePointer>Stage {stage}</StagePointer>
        </Link>
      );
    },
    [props.currentStage, props.firstStageLink]
  );

  return (
    <>
      <div className="stage-list">
        <div className="stage-list__item stage-list__item1 active">
          {renderStageLink(1)}
        </div>

        <div className="stage-list__item stage-list__item2 active">
          {renderStageLink(2)}
        </div>
        <div className="stage-list__item stage-list__item3">
          {renderStageLink(3)}
        </div>
        <div className="stage-list__bg" style={widthBg} />
      </div>
      <div className="stage__top-text">{props.info}</div>
    </>
  );
};

export default OrderStages;
