import Nouislider from "nouislider-react";
import MakingProgressbarDesc from "./MakingProgressbarDesc";

const MakingProgressbar = ({list}) => {
  return (
    <>
      {" "}
      <Nouislider
        id={`matchmaking__progressbar`}
        range={{ min: 0, max: 100 }}
        start={[20, 80]}
        connect
      />
      <MakingProgressbarDesc list={list} />
    </>
  );
};

export default MakingProgressbar;
