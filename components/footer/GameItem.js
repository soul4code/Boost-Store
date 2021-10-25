import Link from "next/link";


const GameItem = (props)=>{
    return <>
    <li className="game-catalog__item" key={props.game.ID}>
      <Link href={`/${props.game.CODE}`} key={props.game.ID} passHref>
        <a className="game-catalog__game-link">
          <img
            className="game-catalog__game-img"
            src={props.game.UF_SVG_ICON}
            alt={props.game.NAME}
          />
          <span className="game-catalog__game-name">{props.game.NAME}</span>
        </a>
      </Link>
    </li>
    </>
}

export default GameItem 