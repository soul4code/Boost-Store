const SliderItem = (props) => {
  return (
    <>
      <div className="swiper-slide__content">
        <div className="swiper-slide-title">
          <h2>
            Fast and Pro Game
            <span>Boosting services!</span>
          </h2>
        </div>
        <div className="swiper-slide__text">
          <p>
            More than <span>8 years</span> of experience and team of{" "}
            <span>1000+ professional players</span>
          </p>
        </div>
        <div className="swiper-slide__box">
          <div className="swiper-slide__advant">
            <div className="swiper-slide__icon">
              <img src="img/icons/call.svg" alt="" />
            </div>
            <div className="swiper-slide__info">
              <p>In time</p>
            </div>
          </div>
          <div className="swiper-slide__advant">
            <div className="swiper-slide__icon">
              <img src="img/icons/secure.svg" alt="" />
            </div>
            <div className="swiper-slide__info">
              <p>Secure</p>
            </div>
          </div>
          <div className="swiper-slide__advant">
            <div className="swiper-slide__icon">
              <img src="img/icons/confidential.svg" alt="" />
            </div>
            <div className="swiper-slide__info">
              <p>Confidentiality</p>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide__img">
        <img src="img/main/img-slider.png" alt="" />
      </div>
    </>
  );
};

export default SliderItem;
