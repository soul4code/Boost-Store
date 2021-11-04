import Nouislider from "nouislider-react";
import ArrRightLargeFat from "../icons/ArrRightLargeFat";
import SelectDarkBlue from "../SelectDarkBlue/SelectDarkBlue";
import SelectedRank from "../SelectedRank/SelectedRank";
import Image from "next/image";
import MakingProgressbar from "../MakingProgressbar/MakingProgressbar";

const MakingProgressMain = (props) => {
  return (
    <div className="matchmaking__progress">
      <div className="matchmaking__progress-block">
        <SelectedRank
          positionList={props.positionList}
          title={"Сurrent rank"}
        />
        <div className="matchmaking__progress-arr">
          <ArrRightLargeFat wrapperClass={"matchmaking__progress-arr-box"} />

          <ArrRightLargeFat wrapperClass={"matchmaking__progress-arr-box"} />

          <ArrRightLargeFat wrapperClass={"matchmaking__progress-arr-box"} />

        </div>

        <SelectedRank
          positionList={props.positionList}
          title={"Desired rank"}
          isReverse={true}
        />
      </div>
        <MakingProgressbar list={props.positionList}/>
    </div>
  );
};

export default MakingProgressMain;
