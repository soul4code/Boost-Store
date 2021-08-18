import Link from 'next/link';
import styles from './style.module.css';

const Footer = () => {

    return(
        <>
        <footer className="footer">
            <div className="footer__box">
                <div className="select footer__select">
                    <div className="select__field">
                        <span className="select__field-text">Eng</span>
                        <svg className="select__field-icon" width="9" height="5" viewBox="0 0 9 5" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
                        </svg>
                    </div>
                    <div className="select__wrap-list">
                        <ul className="select__list">
                            <li className="select__list-item">
                            <Link href="#">
                                <a className="select__list-link">RUS</a>
                            </Link>
                            </li>
                            <li className="select__list-item">
                            <Link href="#">
                                <a className="select__list-link select__list-link_active">ENG</a>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className="soc-net footer__soc-net">
                    <li className="soc-net__item">
                    <Link href="#">
                        <a className="soc-net__link">
                            <svg className="soc-net__icon" width="28" height="17" viewBox="0 0 28 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.235 9.38658C22.7823 8.81366 22.9118 8.55877 23.235 8.04665C23.2408 8.0408 26.9778 2.86578 27.3628 1.11077L27.3651 1.1096C27.5565 0.470031 27.3651 0 26.4399 0H23.3785C22.5991 0 22.2398 0.403385 22.0473 0.854708C22.0473 0.854708 20.4885 4.59391 18.2835 7.01772C17.5718 7.71809 17.2428 7.94258 16.8542 7.94258C16.6629 7.94258 16.3654 7.71809 16.3654 7.07852V1.1096C16.3654 0.342584 16.1472 0 15.502 0H10.6882C10.1994 0 9.90884 0.357785 9.90884 0.691015C9.90884 1.41828 11.0114 1.58548 11.1257 3.63163V8.0712C11.1257 9.044 10.9495 9.22289 10.5587 9.22289C9.518 9.22289 6.99208 5.46849 5.49519 1.17157C5.19301 0.337907 4.89784 0.00116915 4.11264 0.00116915H1.05004C0.176173 0.00116915 0 0.404554 0 0.855877C0 1.65329 1.0407 5.61815 4.8395 10.8563C7.37125 14.4318 10.9367 16.3692 14.1802 16.3692C16.1297 16.3692 16.3677 15.939 16.3677 15.1988C16.3677 11.7823 16.1916 11.4596 17.1681 11.4596C17.6208 11.4596 18.4001 11.6841 20.2202 13.4087C22.3004 15.4537 22.6423 16.3692 23.8067 16.3692H26.8681C27.7408 16.3692 28.183 15.939 27.9286 15.0901C27.3464 13.3047 23.4123 9.63212 23.235 9.38658Z" />
                            </svg>
                        </a>
                    </Link>
                    </li>
                    <li className="soc-net__item">
                    <Link href="#">
                        <a className="soc-net__link">
                            <svg className="soc-net__icon" width="10" height="20" viewBox="0 0 10 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.45134 19.139V10.4094H9.38032L9.81975 7.00637H6.45134V4.83401C6.45134 3.84905 6.72374 3.17781 8.13777 3.17781L9.93831 3.17707V0.133236C9.62693 0.0927719 8.55808 0 7.31405 0C4.71631 0 2.93786 1.58563 2.93786 4.49697V7.00637H0V10.4094H2.93786V19.139H6.45134Z" />
                            </svg>
                        </a>
                    </Link>
                    </li>
                    <li className="soc-net__item">
                    <Link href="#">
                        <a className="soc-net__link">
                            <svg className="soc-net__icon soc-net__icon_instagram" width="20" height="20" viewBox="0 0 20 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="3" />
                                <path
                                    d="M14.1276 1H5.87244C3.18573 1 1 3.18573 1 5.87244V14.1277C1 16.8143 3.18573 19 5.87244 19H14.1277C16.8143 19 19 16.8143 19 14.1277V5.87244C19 3.18573 16.8143 1 14.1276 1V1ZM17.9448 14.1277C17.9448 16.2324 16.2324 17.9448 14.1276 17.9448H5.87244C3.76759 17.9448 2.05524 16.2324 2.05524 14.1277V5.87244C2.05524 3.76759 3.76759 2.05524 5.87244 2.05524H14.1277C16.2324 2.05524 17.9448 3.76759 17.9448 5.87244V14.1277Z" />
                                <path
                                    d="M10 5.09082C7.29311 5.09082 5.09094 7.29299 5.09094 9.99991C5.09094 12.7068 7.29311 14.909 10 14.909C12.707 14.909 14.9091 12.7068 14.9091 9.99991C14.9091 7.29299 12.707 5.09082 10 5.09082ZM10 13.8565C7.87361 13.8565 6.14347 12.1265 6.14347 9.99991C6.14347 7.87349 7.87361 6.14335 10 6.14335C12.1266 6.14335 13.8566 7.87349 13.8566 9.99991C13.8566 12.1265 12.1266 13.8565 10 13.8565Z" />
                                <path
                                    d="M15.0453 3.31836C14.2182 3.31836 13.5454 3.96069 13.5454 4.75011C13.5454 5.53967 14.2182 6.182 15.0453 6.182C15.8725 6.182 16.5454 5.53967 16.5454 4.75011C16.5454 3.96055 15.8725 3.31836 15.0453 3.31836ZM15.0453 5.143C14.8184 5.143 14.6337 4.9667 14.6337 4.75011C14.6337 4.53339 14.8184 4.35722 15.0453 4.35722C15.2724 4.35722 15.4571 4.53339 15.4571 4.75011C15.4571 4.9667 15.2724 5.143 15.0453 5.143Z" />
                            </svg>
                        </a>
                    </Link>
                    </li>
                    <li className="soc-net__item">
                    <Link href="#">
                        <a className="soc-net__link">
                            <svg className="soc-net__icon" width="22" height="19" viewBox="0 0 22 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 2.24931C21.1819 2.63077 20.3101 2.88362 19.4012 3.00638C20.3363 2.413 21.0499 1.48054 21.3854 0.356615C20.5136 0.909077 19.5511 1.29931 18.5254 1.51708C17.6976 0.580231 16.5179 0 15.2309 0C12.7339 0 10.7236 2.15431 10.7236 4.79531C10.7236 5.17531 10.7539 5.54069 10.8281 5.88854C7.0785 5.69415 3.76063 3.78392 1.53175 0.874C1.14262 1.59162 0.914375 2.413 0.914375 3.29723C0.914375 4.95754 1.71875 6.42931 2.91775 7.28138C2.19313 7.26677 1.48225 7.04315 0.88 6.69092C0.88 6.70554 0.88 6.72454 0.88 6.74354C0.88 9.07323 2.44337 11.0083 4.4935 11.4541C4.12637 11.5608 3.72625 11.6119 3.311 11.6119C3.02225 11.6119 2.73075 11.5944 2.45712 11.5301C3.0415 13.4286 4.69975 14.8244 6.6715 14.8697C5.137 16.1456 3.18863 16.9144 1.07938 16.9144C0.7095 16.9144 0.35475 16.8968 0 16.8486C1.99787 18.2181 4.36562 19 6.919 19C15.2185 19 19.756 11.6923 19.756 5.358C19.756 5.14608 19.7491 4.94146 19.7395 4.73831C20.6346 4.06308 21.3867 3.21977 22 2.24931Z" />
                            </svg>
                        </a>
                    </Link>
                    </li>
                </ul>
            </div>

        <Link href="/">
            <a className='logo footer__logo'>
                <img className='logo__img footer__logo-img' src="img/logo.jpg" alt="логотип" title="Перейти на главную страницу" />
                <div className='logo__name'>
                    <span className='logo__name-item'>Boost</span>
                    <span className='logo__name-item'>Center</span>
                </div>
            </a>
        </Link>

            <ul className="game-catalog footer__game-catalog">
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/dota2.svg" alt="dota2" />
                        <span className="game-catalog__game-name">Dota 2</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
                <li className="game-catalog__item">
                <Link href="#">
                    <a className="game-catalog__game-link">
                        <img className="game-catalog__game-img" src="img/game-catalog__game-img.svg" alt="логотип" />
                        <span className="game-catalog__game-name">WoW-classic</span>
                    </a>
                </Link>
                </li>
            </ul>

            <div className="footer__copyrigth">© 2021 All rights reserved. Boost-Store - game boosting service</div>

            <nav className="footer__menu">
                <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                    <Link href="#">
                        <a className="footer__menu-link">EULA</a>
                    </Link>
                    </li>
                    <li className="footer__menu-item">
                    <Link href="#">
                        <a className="footer__menu-link">Terms and conditions</a>
                    </Link>
                    </li>
                    <li className="footer__menu-item">
                    <Link href="#">
                        <a className="footer__menu-link">Private policy</a>
                    </Link>
                    </li>
                </ul>
            </nav>

        </footer>
        <script src="js/nouislider.min.js"></script>
        <script src="js/custom-select.min.js"></script>
        <script src="js/swiper.min.js"></script>
        <script src="js/script.min.js"></script>
        </>
    );
}

export default Footer;