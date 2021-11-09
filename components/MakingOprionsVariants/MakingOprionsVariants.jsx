import MakingOptionsCheckboxList from "../MakingOptionsCheckboxList/MakingOptionsCheckboxList";
import VariantItem from "./VariantItem";

const MakingOprionsVariants = ({ list }) => {


  return (
    <>
      <div className="matchmaking__options-card2-box">
        <VariantItem list={list} defaultValue={"Current Rank"} />
        <VariantItem list={list} defaultValue={"Dessired Rank"} />
      </div>
      <MakingOptionsCheckboxList addClass={'options-checkbox-options'}/>
    </>
  );
};

export default MakingOprionsVariants;
