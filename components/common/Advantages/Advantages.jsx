import AdvantItem from "./AdvantItem";

const Advantages = ({ advantages }) => {
  let advantagesList;
  if (advantages) {
    advantagesList = advantages.map((i) => <AdvantItem {...i} />);
  }

  return <div className="matchmaking__advants">{advantagesList}</div>;
};

export default Advantages;
