import MainLayout from '../../components/layouts/Main';
import Image from 'next/image';
import wotPic from '../../images/review/img1.jpg';
import UserSvg from '../../images/review/user.svg';
import StarIcon from '../../public/img/reviews/star.svg';

const Reviews = () => {

    return(
        <MainLayout title="Reviews">
            <div className="main__page review__page">
                <h1 className="page__title">
                    Reviews <span>2,262</span>
                </h1>
                <div className="block-bg bg-reviews">
                    <div className="block__tabs">
                        <button className="tab__item tab__item-reviews active">All</button>
                        <button className="tab__item tab__item-reviews">СS:GO</button>
                        <button className="tab__item tab__item-reviews">DOTA2</button>
                        <button className="tab__item tab__item-reviews">World of Tanks </button>
                        <button className="tab__item tab__item-reviews">WarCraft</button>
                        <button className="tab__item tab__item-reviews">DIABLO</button>
                        <button className="tab__item tab__item-reviews">Minecraft</button>
                    </div>
                    <div className="reviews__header">
                        <div className="reviews__header-box">
                            <Image className="reviews__header-gameImg" src={ wotPic } alt="world of tanks" width='240' height='180' />
                                <div className="reviews__header-info">
                                    <div className="reviews__header-game">
                                        World Of Tanks
                                    </div>
                                    <div className="reviews__header-subtitle">
                                        Reviews: 1452 <span>Excellent</span>
                                    </div>
                                    <div className="reviews__header-rating">
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                        <StarIcon/>
                                    </div>
                                </div>
                        </div>
                        <div className="reviews__header-write">
                            <div className="reviews__header-user">
                                <UserSvg/>
                            </div>
                            <div className="reviews__header-write-box">
                                <div className="reviews__header-stars">
                                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                            fill="white"/>
                                    </svg>
                                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                            fill="white"/>
                                    </svg>
                                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                            fill="white"/>
                                    </svg>
                                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                            fill="white"/>
                                    </svg>
                                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                            fill="white"/>
                                    </svg>
                                </div>
                                <div className="reviews__header-btn">
                                    <button className="button-color">
                                        Write a review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__inner">
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <StarIcon/>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-box">
                                    <img className="reviews__item-user" src="img/review/avatar.png" alt="" />
                                        <div className="reviews__item-profile">
                                            <div className="reviews__item-name">
                                                Tim_Rodov
                                            </div>
                                            <div className="reviews__item-profile-info">
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-rev.svg" alt="" />
                                                        <p>1 reviews</p>
                                                </div>
                                                <div className="reviews__item-profile-info-box">
                                                    <img src="img/review/prof-reg.svg" alt="" />
                                                        <p>RU</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews__item-data">
                                    <div className="reviews__item-data-name">
                                        CS:GO Matchmaking rank boost
                                    </div>
                                    <div className="reviews__item-data-info">
                                        <span>Order #34951</span>, <span>12.12.2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__item-wrapper">
                                <div className="reviews__item-content">
                                    <div className="reviews__item-stars">
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="#C4C4C4"/>
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="url(#paint0_linear)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="11.5" y1="0" x2="11.5" y2="23"
                                                                gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#30CAFF"/>
                                                    <stop offset="1" stop-color="#329BF8"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="reviews__item-title">
                                        Fast and easy
                                    </div>
                                    <div className="reviews__item-text">
                                        Fast and easy, would recommend in the furure.
                                    </div>
                                </div>
                                <div className="reviews__item-time">
                                    5 hours ago
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__pagination">
                        <div className="reviews__pag-prev">
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10L1 5.5L6 1" stroke="white"/>
                            </svg>
                        </div>
                        <div className="reviews__pag-item active">1</div>
                        <div className="reviews__pag-item">2</div>
                        <div className="reviews__pag-item">3</div>
                        <div className="reviews__pag-item">4</div>
                        <div className="reviews__pag-item">5</div>
                        <div className="reviews__pag-item">6</div>
                        <div className="reviews__pag-item">7</div>
                        <div className="reviews__pag-next">
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999999L6 5.5L0.999999 10" stroke="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Reviews;