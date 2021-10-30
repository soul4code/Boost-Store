import Link from "next/link";

const CategoryItem = (props) => {
  let newGames;
  const getFilter = () => {
    newGames = props.currentGameServices.CARDS.filter(
      (game) => game.CATEGORY_NAME === props.category
    );
    props.setFilter(newGames);
  };
  return (
    <>
      <li
        className="category-menu__item"
        onClick={getFilter}
      >
        <div className="category-menu__link">{props.category}</div>
      </li>
    </>
  );
};

export default CategoryItem;
