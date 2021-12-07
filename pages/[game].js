import MainLayout from "../components/layouts/Main";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductArrow from "../public/img/icons/product-arrow.svg";
import Product from "../components/Product/Product";
import CategoriesDefault from "../components/CategoriesDefault/CategoriesDefault";
import { connect } from "react-redux";
import {
  setCurrentGame,
  setFilter,
  setCurrentGameServices,
  setCurrentCategories,
} from "../store/games/actions";
import { useEffect } from "react";

const Game = (props) => {
  let router = useRouter();

  useEffect(() => {
    const editFilterAfterEditGame = (() => {
      props.setFilter([]);
    })();
  }, [router.query.game]);

  props.setCurrentGameServices(props.data);

  let cardsList;
  if (props.filter.length === 0) {
    cardsList =
      props.data.CARDS &&
      props.data.CARDS.map((card) => (
        <Product card={card} currentGameCode={props.params.game} />
      ));
  } else {
    cardsList = props.filter.map((card) => (
      <Product card={card} currentGameCode={props.params.game} />
    ));
  }

  return (
    <MainLayout title="Заменить когда придут данные">
      <nav className="category-menu">
        <CategoriesDefault
          categories={props.data.CATEGORIES}
          actionFilter={props.setFilter}
          services={props.data}
        />
      </nav>
      <h1 className="page__title">Games</h1>
      <div className="products">{cardsList}</div>
    </MainLayout>
  );
};

export async function getStaticPaths({ locales }) {
  const paths = [];

  const res = await fetch("https://boost-center.com/api/games");
  const games = await res.json();

  for (const locale of locales) {
    games.forEach((game) => {
      paths.push({ params: { game: game.CODE }, locale });
    });
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://boost-center.com/api/game/${params.game}`);
  const data = await res.json();

  return { props: { data, params }, revalidate: 5 };
}

const mapStateToProps = (state) => ({
  currentGame: state.games.currentGame,
  filter: state.games.filter,
  currentGameServices: state.games.currentGameServices,
});
const mapDispatchToProps = {
  setCurrentGame,
  setFilter,
  setCurrentGameServices,
  setCurrentCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

// export default Game;
