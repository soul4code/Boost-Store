import { useEffect, useState } from "react";
import { api } from "../../utils/api/api";
import CategoryItem from "./CategoryItem";

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
    if(props.categoriesList){
      categoriesList = categories.map((category) => (
        <CategoryItem category={category} currentGame={props.currentGame} />
      ));
    } else if(props.currentGame){
      categoriesList = categories.CATEGORIES.map((category) => (
      <CategoryItem category={category} currentGame={props.currentGame} />
    ));
    }
    
  }

  return (
    <>
      <div className="game__rank-list">
        {" "}
        {categoriesList}{" "}
        <div className="game__rank-item game__rank-item-more">
          <p> More </p>{" "}
          <svg
            className="game__rank-item-arr"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
          </svg>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default CategoriesGradient;

// export default CategoriesGradient;
