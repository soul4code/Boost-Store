import Link from "next/link";

const GameItem = (props) => {
  return (
    <>
      <Link href={`/${props.game.CODE}`} key={props.game.ID} passHref >
        <a className="header__navbar-games-item" onClick={()=>{props.setCurrentGame(props.game.CODE)}}>
          <img width="50px" src={props.game.UF_SVG_ICON} alt={props.game.NAME} />
          <p>{props.game.NAME}</p>
        </a>
      </Link>
    </>
  );
};

export default GameItem;
