import CategoryItem from "./CategoryItem";
import { connect } from "react-redux";

const CategoriesDefault = (props) => {
  // currentGameServices={props.data}

  let categoriesList;
  if (props.categories) {
    categoriesList = props.categories.map((category) => (
      <CategoryItem
        category={category}
        setFilter={props.setFilter}
        currentGameServices={props.currentGameServices}
      />
    ));
  }

  return (
    <ul className="category-menu__list">
      {categoriesList}

      {/* <Link href="/">
            <li className="category-menu__item">
              <a className="category-menu__link">Прокачка статистики</a>
            </li>
          </Link>
          <Link href="#">
            <li className="category-menu__item">
              <a className="category-menu__link">ЛБЗ</a>
            </li>
          </Link>
          <Link href="#">
            <li className="category-menu__item">
              <a className="category-menu__link">Фарм Серебра</a>
            </li>
          </Link>
          <Link href="#">
            <li className="category-menu__item">
              <a className="category-menu__link">Прокачка танка на ветке</a>
            </li>
          </Link>
          <Link href="#">
            <li className="category-menu__item">
              <a className="category-menu__link">WNB</a>
            </li>
          </Link>
          <Link href="#">
            <li className="category-menu__item">
              <a className="category-menu__link">Топовый урон</a>
            </li>
          </Link>
          <Link href="#">
            <li className="category-menu__item">
              <a className="category-menu__link">Популярное</a>
            </li>
          </Link> */}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  games: state.games.games,
});

export default connect(mapStateToProps)(CategoriesDefault);

// export default CategoriesDefault;
