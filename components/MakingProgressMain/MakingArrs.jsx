import ArrRightLargeFat from "../icons/ArrRightLargeFat";

const MakingArrs = () => {
  const arrs = [1, 2, 3];

  let arrList = arrs.map((i) => (
    <ArrRightLargeFat wrapperClass={"matchmaking__progress-arr-box"} />
  ));
  return <div className="matchmaking__progress-arr">{arrList}</div>;
};

export default MakingArrs;
