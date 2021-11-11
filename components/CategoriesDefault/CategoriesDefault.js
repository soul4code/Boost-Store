import CategoryItem from "./CategoryItem";
import { connect } from "react-redux";

const CategoriesDefault = ({categories, actionFilter, services }) => {
  
  let categoriesList;
  if (categories) {
    categoriesList = categories.map((category) => (
      <CategoryItem
        category={category}
        setFilter={actionFilter}
        currentGameServices={services}
      />
    ));
  }

  return <ul className="category-menu__list">{categoriesList}</ul>;
};
const mapStateToProps = (state) => ({
  games: state.games.games,
});

export default connect(mapStateToProps)(CategoriesDefault);