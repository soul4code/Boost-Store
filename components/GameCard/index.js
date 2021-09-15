import React from 'react';

const GameCard = React.forwardRef((props, ref) => {
    return(
        <a className="game-card section-games__game-card" href={props.link} ref={ref} >
            <div className="game-card__wrap-img mainGame-card__wrap-img">
                <img className="game-card__img" src={props.picture} alt={props.alt}/>
            </div>
        </a>
    );
});

export default GameCard;