import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual, Scrollbar, Controller } from "swiper";
import TankItem from "./TankItem";
import { useEffect, useState } from "react";
import ImgTankItem from "./ImgTankItem";

const PersonalMissionMain = (props) => {
  console.log(props);

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const smallSliderList = props.choiseTank.map((tank, index) => (
    <TankItem
      model={tank.MODEL}
      imgSmall={tank.IMG_SMALL}
      key={index}
      getCurrentTank={props.getCurrentTank}
    />
  ));

  const lasgeSliderList = props.choiseTank.map((tank, index) => (
    <ImgTankItem
      model={tank.MODEL}
      imgLarge={tank.IMG_LARGE}
      key={index}
      getCurrentTank={props.getCurrentTank}
    />
  ));

  const addCurrentTank = (i) => {
    // if (i.classList.contains("swiper-slide-active")) {
    //   let htmlStrObj = {};
    //   htmlStrObj.container = i;
    //   props.setCurrentTank(htmlStrObj.container.children[1].innerHTML);
    // }
    props.setCurrentTank();
  };

  // useEffect(() => {
  //   if (secondSwiper) {
  //     document.querySelectorAll(".swiperTank .swiper-slide").forEach((i) => {
  //       i.addEventListener("click", () => addCurrentTank(i));
  //     });
  //   }
  //   return document
  //     .querySelectorAll(".swiperTank .swiper-slide")
  //     .forEach((i) => {
  //       i.removeEventListener("click", () => addCurrentTank(i));
  //     });
  // }, [secondSwiper]);

  return (
    <div className="matchmaking__card3-item matchmaking__card3-result">
      <div className="matchmaking__card3-item-slider">
        <Swiper
          modules={[Navigation, Pagination, Virtual, Controller]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          className={`swiperTank`}
          virtual
          onSwiper={(e) => {
            setSecondSwiper();
          }}
          onSlideChange={(e) => {
            props.setCurrentTank(lasgeSliderList[e.activeIndex].props.model);
          }}
          controller={{ control: firstSwiper }}
        >
          {lasgeSliderList.map((tank, index) => (
            <SwiperSlide className={``} key={tank} virtualIndex={index}>
              {tank}
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Navigation, Pagination, Virtual, Controller]}
          navigation
          spaceBetween={50}
          slidesPerView={4}
          className={`swiperTankLine`}
          virtual
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        >
          {smallSliderList.map((tank, index) => (
            <SwiperSlide className={``} key={tank} virtualIndex={index}>
              {tank}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 
          <div className="swiper-button-next">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.15 6.13267L2.9019 6.13267L7.4613 1.4804C7.79323 1.14171 7.79323 0.592483 7.46151 0.254013C7.12959 -0.0846728 6.59111 -0.0846729 6.25919 0.254013L0.249049 6.38679C0.209525 6.42712 0.17425 6.47157 0.143225 6.51884C0.128989 6.54074 0.119 6.56438 0.106675 6.58714C0.0926501 6.61403 0.0765006 6.63962 0.0652377 6.66802C0.0531241 6.69729 0.0463263 6.72765 0.0378253 6.758C0.0308138 6.78207 0.0216757 6.80506 0.0167891 6.82977C0.00573793 6.88615 6.16946e-07 6.94296 6.11961e-07 6.99998C6.11904e-07 7.00064 0.000212328 7.00129 0.000212327 7.00194C0.000425946 7.05809 0.00595153 7.11447 0.0167891 7.16976C0.0218874 7.19578 0.031449 7.21985 0.0388876 7.24543C0.047175 7.27427 0.0535494 7.30354 0.0650259 7.33152C0.0773493 7.36165 0.0939241 7.38898 0.109225 7.41738C0.1207 7.43863 0.129838 7.46031 0.143012 7.48069C0.174037 7.52861 0.209738 7.57328 0.249476 7.61383L6.2594 13.746C6.59132 14.0846 7.12959 14.0846 7.46151 13.7462C7.79344 13.4075 7.79344 12.8583 7.46151 12.5194L2.90211 7.8673L16.15 7.8673C16.6194 7.8673 17 7.47896 17 6.99999C17 6.52101 16.6194 6.13267 16.15 6.13267Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.85 7.86733H14.0981L9.5387 12.5196C9.20678 12.8583 9.20678 13.4075 9.53849 13.746C9.87041 14.0847 10.4089 14.0847 10.7408 13.746L16.751 7.6132C16.7905 7.57288 16.8258 7.52843 16.8568 7.48116C16.871 7.45926 16.881 7.43562 16.8933 7.41286C16.9074 7.38597 16.9235 7.36038 16.9348 7.33198C16.9469 7.30271 16.9537 7.27235 16.9622 7.24199C16.9692 7.21793 16.9783 7.19494 16.9832 7.17022C16.9943 7.11385 17 7.05704 17 7.00001C17 6.99936 16.9998 6.99871 16.9998 6.99806C16.9996 6.9419 16.994 6.88553 16.9832 6.83024C16.9781 6.80422 16.9686 6.78015 16.9611 6.75456C16.9528 6.72573 16.9465 6.69645 16.935 6.66848C16.9227 6.63834 16.9061 6.61102 16.8908 6.58262C16.8793 6.56137 16.8702 6.53969 16.857 6.5193C16.826 6.47139 16.7903 6.42672 16.7505 6.38617L10.7406 0.254042C10.4087 -0.0846443 9.87041 -0.0846446 9.53849 0.253825C9.20656 0.592511 9.20656 1.14174 9.53849 1.48064L14.0979 6.1327H0.85C0.380587 6.1327 0 6.52104 0 7.00001C0 7.47899 0.380587 7.86733 0.85 7.86733Z"
                fill="white"
              />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PersonalMissionMain;
