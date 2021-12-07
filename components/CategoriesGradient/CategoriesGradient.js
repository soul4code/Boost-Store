import { useEffect, useState } from "react";
import { api } from "../../utils/api/api";
import CategoryItem from "./CategoryItem";
import CategoryItemMore from "./CategoryItemMore";

const CategoriesGradient = (props) => {
  let [categories, setCategories] = useState();

  useEffect(() => {
    if (props.categoriesList) {
      setCategories(props.categoriesList);
    } else if (props.currentGame) {
      api
        .getGameItem(props.currentGame)
        .then((categories) => setCategories(categories));
    } else {
    }
  }, []);

  let categoriesList;

  if (categories) {
    if (props.categoriesList) {
      categoriesList = categories.map((category, idx) => (
        <CategoryItem key={idx} category={category} currentGame={props.currentGame} />
      ));
    } else if (props.currentGame) {
      categoriesList = categories.CATEGORIES.map((category, idx) => (
        <CategoryItem key={idx} category={category} currentGame={props.currentGame} />
      ));
    }
  }
  return (
    <>
      <div className="game__rank-list">
        {categoriesList}
        <CategoryItemMore title={'More'}/>
      </div>
    </>
  );
};

export default CategoriesGradient;
