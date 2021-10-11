import MainLayout from "../components/layouts/Main";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductArrow from "../public/img/icons/product-arrow.svg";

const Game = (props) => {
  const router = useRouter();

  return (
    <MainLayout title="Заменить когда придут данные">
      <nav className="category-menu">
        <ul className="category-menu__list">
          <Link href="/">
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
          </Link>
        </ul>
      </nav>
      <h1>Games</h1>
      <div className="products">
        {props.data.CARDS.map((card) => (
          <div className="product" key={card.ID}>
            <Link href={`${router.asPath}/${card.CODE}`}>
              <a>
                <div className="product__image-wrap">
                  <img src={card.PREVIEW_PICTURE} className="product__image" />
                </div>
                <h2 className="product__title">{card.NAME}</h2>
              </a>
            </Link>

            <p className="product__description">{card.PREVIEW_TEXT}</p>
            <div className="product__price-term">
              <div className="product__price">From 10$</div>
              <div className="product__term">3-5 days</div>
            </div>
            <span className="product__separator"></span>
            <Link href="/">
              <a>
                <div className="product__more">
                  <span className="product__more-price">22 000₽</span>
                  <ProductArrow />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
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

  return { props: { data } };
}

export default Game;
