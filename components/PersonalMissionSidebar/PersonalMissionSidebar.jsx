import { useEffect, useState } from "react";

const PersonalMissionSidebar = (props) => {

  console.log(props.currentTank);

  let [currentArray, setCurrentArray] = useState();

  useEffect(() => {
    if (props.currentTank) {
      console.log(props.currentTank);
      currentArray = props.choiseTank.filter(
        (model) => model.MODEL == props.currentTank
      );
      setCurrentArray(currentArray);
      console.log(currentArray);
    }
  }, [props.currentTank]);

  if (currentArray) {
    return (
      <div className="matchmaking__card3-item matchmaking__card3-choice">
        <div className="matchmaking__card3-className">
          <div className="matchmaking__card3-class-label active">
            <img src="img/icons/tank/img1.svg" alt="" />
            <span className="checkbox-text matchmaking__card3-class-checkbox-text">
              lt
            </span>
          </div>
          <div className="matchmaking__card3-class-label">
            <img src="img/icons/tank/img2.svg" alt="" />
            <span className="checkbox-text matchmaking__card3-class-checkbox-text">
              lt
            </span>
          </div>
          <div className="matchmaking__card3-class-label">
            <img src="img/icons/tank/img3.svg" alt="" />
            <span className="checkbox-text matchmaking__card3-class-checkbox-text">
              lt
            </span>
          </div>
          <div className="matchmaking__card3-class-label">
            <img src="img/icons/tank/img4.svg" alt="" />
            <span className="checkbox-text matchmaking__card3-class-checkbox-text">
              lt
            </span>
          </div>
          <div className="matchmaking__card3-class-label">
            <img src="img/icons/tank/img5.svg" alt="" />
            <span className="checkbox-text matchmaking__card3-class-checkbox-text">
              lt
            </span>
          </div>
        </div>
        <div className="matchmaking__card3-type">
          <div className="matchmaking__card3-type-label active">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">lt1</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">1$</div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
          <div className="matchmaking__card3-type-label matchmaking__card3-type-label-all">
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox"></span>
              <div className="matchmaking__card3-type-title">All</div>
              <div className="checkbox-info checkbox-info-card3">
                <span>i</span>
                <div className="checkbox-info-text">
                  <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                  <img src="img/matchmaking/info-bg.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="matchmaking__card3-type-price">
              <p>1$</p>
              <div className="checkbox-benefit">100%</div>
            </div>
            <div className="matchmaking__card3-type-box">
              <span className="matchmaking__card3-type-checkbox-min"></span>
              <div className="matchmaking__card3-type-text">
                With honors
                <span>1$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Выберите танк</div>;
  }
};

export default PersonalMissionSidebar;
