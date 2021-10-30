import { connect } from "react-redux";
import Button from "../EntrAccount/Button";
import { setAuthToken, setAuth } from "../../store/main/actions";

const ProfileBtn = (props) => {

  const exitFromAccount = () => {
    localStorage.removeItem("authToken");
    props.setAuthToken("");
    props.setAuth(false)
  };

  return (
    <>
      <div className="link-auth header__link-auth link-account select">
        <img className="link-account-img" src="img/review/avatar.png" alt="" />
        <div className="link-account-box">
          <div className="link-account-name">Timofey Rodov</div>
          <div className="link-account-balance">Balance:152$</div>
        </div>
        <div className="link-account-arr">
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z" />
          </svg>
        </div>
        <div className="account__header select__wrap-list">
          <div className="account__header-info">
            <img
              className="account__header-img"
              src="img/review/avatar.png"
              alt=""
            />
            <div className="account__header-box">
              <div className="account__header-name">Timofey Gluxov</div>
              <div className="account__header-status">
                <div className="account__header-status-text">
                  <p>Account status: General</p>
                  <p>(325 usd to Admiral)</p>
                </div>
                <div className="account__header-status-progress">
                  <div className="account__header-status-progress-bg"></div>
                  <div className="account__header-status-progress-start">
                    General
                  </div>
                  <div className="account__header-status-progress-end">
                    Admiral
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account__header-finance">
            <div className="account__header-finance-title">Balance</div>
            <div className="account__header-finance-balance">18 532$</div>
          </div>
          <div className="account__header-enum">
            <div className="enum">
              <div className="enum__title">Personal discount</div>
              <div className="enum__dots">
                .................................................................................................................
              </div>
              <div className="enum__result">15%</div>
            </div>
          </div>
          <Button text="Выход" action={exitFromAccount} />
        </div>
        
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  authToken: state.main.authToken,
});
const mapDispatchToProps = {
  setAuthToken,
  setAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBtn);
