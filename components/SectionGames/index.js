import { connect } from "react-redux";
import Link from "next/link";
import GameCard from "../GameCard";
import { useRouter } from "next/router";
import en from "../../locale/main/en";
import ru from "../../locale/main/ru";

const SectionGames = (props) => {
  const router = useRouter();
  const t = router.locale === "ru" ? ru : en;

  const GameCardList = props.games.map((game) => (
    <Link href={`/${game.CODE}`} key={game.ID} passHref>
      <GameCard picture={game.PICTURE} link={`/${game.CODE}`} alt={game.NAME} />
    </Link>
  ));

  return (
    <section className="section-games container">
      <h2 className="section-games__title">{t.gamesSectionTitle}</h2>
      <div className="section-games__catalog">
        {GameCardList}

        {/* <a className="section-games__players" href='#'>
                    <div className="section-games__players-icon">
                        <img src="img/icons/man.svg" alt="more then 500 professionals players"/>
                        <img className="section-games__players-hov" src="img/icons/man-blue.svg"
                             alt="more then 500 professionals players"/>
                    </div>
                    <div className="section-games__players-text">
                        More than <b>500 professionals players</b>
                    </div>
                </a> */}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  games: state.games.games,
  lang: state.lang.lang,
});

export default connect(mapStateToProps)(SectionGames);
