import MainLayout from "../components/layouts/Main";
import MainSlider from "../components/MainSlider";
import Reviews from "../components/Reviews";
import SectionGames from "../components/SectionGames";
import en from "../locale/main/en";
import ru from "../locale/main/ru";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();
    const t = router.locale === "ru" ? ru : en;

    return (
        <MainLayout title="Boosting Service">
            <MainSlider/>
            <SectionGames/>
            <Reviews/>
            <section className="page-text">
                <div className="container">
                    <h2 className="page-text__title">BoostCenter</h2>
                    <h3 className="page-text__subtitle">Fast and Pro Game Boosting services, in any game!</h3>
                    <div className="page-text__text">
                        <p>BoostHub was created for everyone who play in online games willing to buy any kind of gaming
                            services
                            – ratings, coaching, ELO boosting, powerlevelling, any ratings and achievements, any items
                            in
                            such
                            games as: World of Warcraft, Starcraft 2, League of Legends, Dota 2, CS:GO, Heathstone,
                            Overwatch,
                            PlayerUnknown's Battlegrounds, Heroes of the Storm and many other games.</p>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
