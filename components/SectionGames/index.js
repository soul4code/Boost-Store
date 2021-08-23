import {useEffect, useState} from "react";

export default function SectionGames() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('https://boost-center.com/api/games')
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(`Ошибка при получении списка игр ${err}`);
            })
    }, [])

    return(
        <section className="section-games container">
                <h2 className="section-games__title">Games</h2>
                <div className="section-games__catalog">
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_cs.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_dota.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_tanks.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_wow.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_diablo.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_wow.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_diablo.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_wow.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="game-card section-games__game-card" href="#">
                        <div className="game-card__wrap-img mainGame-card__wrap-img">
                            <img className="game-card__img" src="img/game-card/game-card__img_diablo.jpg" alt="альт" />
                        </div>
                    </a>
                    <a className="section-games__players" href='#'>
                        <div className="section-games__players-icon">
                            <img src="img/icons/man.svg" alt="" />
                            <img className="section-games__players-hov" src="img/icons/man-blue.svg" alt="" />
                        </div>
                        <div className="section-games__players-text">
                            More than <b>500 professionals players</b>
                        </div>
                    </a>
                </div>
            </section>
    );
}