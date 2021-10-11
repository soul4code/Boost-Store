import MainLayout from "../../components/layouts/Main";

export default function Profile() {
    return (
        <MainLayout title="Personal Page | Boost-Store">
            <div className="main__page">
                <h1 className="page__title account__title">
                    Account overview
                </h1>
                <div className="block-bg account-bg">
                    <div className="account__top">
                        <div className="account__info">
                            <div className="account__top-avatar">
                                <div className="account__top-avatar-box">
                                    <img className="account__img" src="img/review/avatar.png" alt="" />
                                        <a className="account__avatar-change" href="#">Change avatar</a>
                                </div>
                                <div className="account__top-avatar-box-mobil">
                                    <div className="account__name account__name-mobil">
                                        Timofey Gluxov
                                    </div>
                                    <div className="account__status-text account__status-text-mobil">
                                        <p>Account status: General (325 usd to Admiral)</p>
                                        <div className="checkbox-info checkbox-info-account">
                                            <span>i</span>
                                            <div className="checkbox-info-text">
                                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                    accusantium doloremque laudantium</p>
                                                <img src="img/matchmaking/info-bg.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="account__top-wrapper">
                                <div className="account__name">
                                    Timofey Gluxov
                                </div>
                                <div className="account__status">
                                    <div className="account__status-text">
                                        <p>Account status: General (325 usd to Admiral)</p>
                                        <div className="checkbox-info checkbox-info-account">
                                            <span>i</span>
                                            <div className="checkbox-info-text">
                                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                    accusantium doloremque laudantium</p>
                                                <img src="img/matchmaking/info-bg.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account__status-progress">
                                        <div className="account__status-progress-bg"></div>
                                        <div className="account__status-progress-start">General</div>
                                        <div className="account__status-progress-end">Admiral</div>
                                    </div>
                                </div>
                                <div className="account__data">
                                    <div className="account__data-box">
                                        <div className="account__data-title">
                                            Your mail
                                        </div>
                                        <div className="account__data-text">
                                            tim.tim.glusxov@mail.ru
                                        </div>
                                    </div>
                                    <div className="account__data-box">
                                        <div className="account__data-title">
                                            Skype
                                        </div>
                                        <div className="account__data-text">
                                            Gluxovteam
                                        </div>
                                    </div>
                                </div>
                                <div className="account__data">
                                    <div className="account__data-box">
                                        <div className="account__data-title">
                                            Phone number
                                        </div>
                                        <div className="account__data-text">
                                            +7 999 999 99 99
                                        </div>
                                    </div>
                                    <div className="account__data-box">
                                        <div className="account__data-title">
                                            Discord
                                        </div>
                                        <div className="account__data-text">
                                            Gluxovteam#5127
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account__top-link">
                                <a href="#">Edit information</a>
                                <a href="#">Change password</a>
                            </div>
                        </div>
                        <div className="account__finance">
                            <div className="account__finance-info">
                                <a href="#">Edit payment information</a>
                            </div>
                            <div className="account__finance-box">
                                <p className="account__finance-title">Balance</p>
                                <p className="account__finance-balance">18 532$</p>
                            </div>
                            <div className="account__enum-box">
                                <div className="enum">
                                    <div className="enum__title">
                                        Personal discount
                                    </div>
                                    <div className="enum__dots">
                                        .................................................................................................................
                                    </div>
                                    <div className="enum__result">
                                        15%
                                    </div>
                                </div>
                                <div className="enum">
                                    <div className="enum__title">
                                        Cashback balance
                                    </div>
                                    <div className="enum__dots">
                                        .................................................................................................................
                                    </div>
                                    <div className="enum__result">
                                        234$
                                    </div>
                                </div>
                                <div className="account__code-box">
                                    <label className="label-form account__label-form">
                                        <input className="input-form" type="text" placeholder="Redeem a bonus code" />
                                            <span className="input-placeholder-form">Redeem a bonus code</span>
                                    </label>
                                    <div className="account__code-btn">
                                        <button className="button-color">
                                            Buy it now
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="account__orders">
                        <div className="account__orders-box">
                            <div className="account__orders-title">
                                Last orders
                            </div>
                            <div className="block__tabs block__tabs-account">
                                <a href="#" className="tab__item tab__item-account active">ALL</a>
                                <a href="#" className="tab__item tab__item-account">Not paid</a>
                                <a href="#" className="tab__item tab__item-account">In process</a>
                                <a href="#" className="tab__item tab__item-account">Finished</a>
                            </div>
                        </div>
                        <div className="account__orders-inner">
                            <div className="account__order-item">
                                <div className="account__order-item-box">
                                    <img className="account__order-item-img" src="img/lk/img1.jpg" alt="" />
                                        <div className="account__order-item-info">
                                            <div className="account__order-item-title">
                                                Farming silver on premium tanks <span>x1</span>
                                            </div>
                                            <div className="account__order-item-options">
                                                <p>+1 Win Extra </p>
                                                <p>Play with booster (Duo/Lobby)</p>
                                                <p>Priority order</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="account__order-item-progress">
                                    <div className="account__order-item-progress-title">
                                        Order status
                                    </div>
                                    <div className="account__order-item-progressbar">
                                        <div className="account__order-item-progress-bg"></div>
                                        <div className="account__order-item-progress-procent">
                                            35%
                                        </div>
                                    </div>
                                    <div className="account__order-item-progress-box">
                                        <div className="account__order-item-start">Start day: <span>01.01.2021</span>
                                        </div>
                                        <div className="account__order-item-end">Update day: <span>04.01.2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="account__order-item-price">
                                    163.40$
                                </div>
                                <div className="account__order-item-more">
                                    <button className="button-color">
                                        Write a review
                                    </button>
                                </div>
                            </div>
                            <div className="account__order-item">
                                <div className="account__order-item-box">
                                    <img className="account__order-item-img" src="img/lk/img2.jpg" alt="" />
                                        <div className="account__order-item-info">
                                            <div className="account__order-item-title">
                                                Farming silver on premium tanks <span>x1</span>
                                            </div>
                                            <div className="account__order-item-options">
                                                <p>+1 Win Extra </p>
                                                <p>Play with booster (Duo/Lobby)</p>
                                                <p>Priority order</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="account__order-item-progress">
                                    <div className="account__order-item-progress-title">
                                        Order status
                                    </div>
                                    <div className="account__order-item-progressbar">
                                        <div
                                            className="account__order-item-progress-bg account__order-item-progress-bg-20">
                                        </div>
                                        <div className="account__order-item-progress-procent">
                                            20%
                                        </div>
                                    </div>
                                    <div className="account__order-item-progress-box">
                                        <div className="account__order-item-start">Start day: <span>01.01.2021</span>
                                        </div>
                                        <div className="account__order-item-end">Update day: <span>04.01.2021</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="account__order-item-price">
                                    2 140$
                                </div>
                                <div className="account__order-item-more">
                                    <button className="button-color">
                                        Write a review
                                    </button>
                                </div>
                            </div>
                            <div className="account__order-item">
                                <div className="account__order-item-box">
                                    <img className="account__order-item-img" src="img/lk/img3.jpg" alt="" />
                                        <div className="account__order-item-info">
                                            <div className="account__order-item-title">
                                                Farming silver on premium tanks <span>x1</span>
                                            </div>
                                            <div className="account__order-item-options">
                                                <p>+1 Win Extra </p>
                                                <p>Play with booster (Duo/Lobby)</p>
                                                <p>Priority order</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="account__order-item-progress">
                                    <div className="account__order-item-progress-title">
                                        Order status
                                    </div>
                                    <div className="account__order-item-progressbar">
                                        <div
                                            className="account__order-item-progress-bg account__order-item-progress-bg-100">
                                        </div>
                                        <div className="account__order-item-progress-procent">
                                            100%
                                        </div>
                                    </div>
                                    <div className="account__order-item-progress-box">
                                        <div className="account__order-item-start">Start day: <span>01.01.2021</span>
                                        </div>
                                        <div className="account__order-item-end">Update day: <span>04.01.2021</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="account__order-item-price">
                                    21.30$
                                </div>
                                <div className="account__order-item-more">
                                    <button className="button-color">
                                        Write a review
                                    </button>
                                </div>
                            </div>
                            <div className="account__order-item">
                                <div className="account__order-item-box">
                                    <img className="account__order-item-img" src="img/lk/img1.jpg" alt="" />
                                        <div className="account__order-item-info">
                                            <div className="account__order-item-title">
                                                Farming silver on premium tanks <span>x1</span>
                                            </div>
                                            <div className="account__order-item-options">
                                                <p>+1 Win Extra </p>
                                                <p>Play with booster (Duo/Lobby)</p>
                                                <p>Priority order</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="account__order-item-progress">
                                    <div className="account__order-item-progress-title">
                                        Order status
                                    </div>
                                    <div className="account__order-item-progressbar">
                                        <div
                                            className="account__order-item-progress-bg account__order-item-progress-bg-65">
                                        </div>
                                        <div className="account__order-item-progress-procent">
                                            65%
                                        </div>
                                    </div>
                                    <div className="account__order-item-progress-box">
                                        <div className="account__order-item-start">Start day: <span>01.01.2021</span>
                                        </div>
                                        <div className="account__order-item-end">Update day: <span>04.01.2021</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="account__order-item-price">
                                    232.10$
                                </div>
                                <div className="account__order-item-more">
                                    <button className="button-color">
                                        Write a review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
);
}