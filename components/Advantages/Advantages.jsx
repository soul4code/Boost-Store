import AdvantItem from "./AdvantItem";

const Advantages = (props) => {
  let advantagesList;
  if (props.advantages) {
    advantagesList = props.advantages.map((i) => <AdvantItem {...i} />);
  }

  return (
    <div className="matchmaking__advants">
      {advantagesList}
    </div>
  );
};

export default Advantages;
