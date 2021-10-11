import React from 'react';

const GameCard = React.forwardRef(({ href, alt, picture }, ref) => {

    return(
        <a className="game-card section-games__game-card" href={href} ref={ref} >
            <div className="game-card__wrap-img mainGame-card__wrap-img">
                <img className="game-card__img" src={picture} alt={alt}/>
            </div>
        </a>
    );
});

export default GameCard;