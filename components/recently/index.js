import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../../locale/main/en';
import ru from '../../locale/main/ru';

const Recently = () => {
    const router = useRouter();
    const t = router.locale === "ru" ? ru : en;

    return(
        <section className="recently">
            <h2 className="recently__title">{ t.recentlyTitle }</h2>
            <Link href="#">
                <a className="game-card">
                    <div className="game-card__wrap-img">
                        <img className="game-card__img" src="img/game-card/game-card__img.jpg" alt="альт"/>
                    </div>
                    <div className="game-card__name">World of WarCraft</div>
                </a>
            </Link>
            <Link href="#">
                <a className="game-card">
                    <div className="game-card__wrap-img">
                        <img className="game-card__img" src="img/game-card/game-card__img.jpg" alt="альт"/>
                    </div>
                    <div className="game-card__name">DOTA2</div>
                </a>
            </Link>
            <Link href="#">
                <a className="game-card">
                    <div className="game-card__wrap-img">
                        <img className="game-card__img" src="img/game-card/game-card__img.jpg" alt="альт"/>
                    </div>
                    <div className="game-card__name">Hit Hard! Hit Fast! Hit Often!</div>
                </a>
            </Link>
        </section>
    );
}

export default Recently;