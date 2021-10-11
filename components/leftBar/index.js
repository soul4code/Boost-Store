import Link from 'next/link';
import Recently from '../recently';
import Logo from '../logo';
import MobileHeaderSidebar from '../mobileHeaderSidebar';
import NewsIcon from '../../images/menu/news.svg';
import GamesIcon from '../../images/menu/games.svg';
import ArrowIcon from '../../images/menu/arrow-icon.svg';
import MobileMenuIcon from '../../images/menu/menu.svg';
import MainMenu from '../mainMenu';

const LeftBar = () => {

    return (
        <aside className="sidebar">
            <Logo nameColorClass="logo__name-item_color_blue" />
            <ul className="header__navbar header__navbar-sidebar">
                <div className="header__navbar-sidebar-btn">
                    <MobileMenuIcon/>
                </div>
                <li className="header__navbar-item select">
                    <Link href="#">
                        <a className="header__navbar-link header__navbar-link_games">
                            <GamesIcon/>
                            <span>Games</span>
                            <ArrowIcon/>
                        </a>
                    </Link>
                    <div className="header__navbar-games-list select__wrap-list">
                        <Link href="#">
                            <a className="header__navbar-games-item">
                                <img src="img/wow.png" alt=""/>
                                <p>World of Warcraft</p>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="header__navbar-games-item">
                                <img src="img/wow.png" alt=""/>
                                <p>World of Warcraft</p>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="header__navbar-games-item">
                                <img src="img/wow.png" alt=""/>
                                <p>World of Warcraft</p>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="header__navbar-games-item">
                                <img src="img/wow.png" alt=""/>
                                <p>World of Warcraft</p>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="header__navbar-games-item">
                                <img src="img/wow.png" alt=""/>
                                <p>World of Warcraft</p>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="header__navbar-games-item">
                                <img src="img/wow.png" alt=""/>
                                <p>World of Warcraft</p>
                            </a>
                        </Link>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link href="#">
                        <a className="header__navbar-link header__navbar-link_news">
                            <NewsIcon/>
                            <span>News</span>
                            <ArrowIcon/>
                        </a>
                    </Link>
                </li>
            </ul>
            <MobileHeaderSidebar/>
            <MainMenu/>
            <Recently/>
        </aside>
    );
}

export default LeftBar;