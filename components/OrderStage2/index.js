import Link from "next/link";
import OrderStages from "../OrderStages";
import SelectTransparent from "../common/SelectTransparent/SelectTransparent";

const OrderStage2 = (props) => {
  return (
    <>
      <div className="block-bg stage__wrapper">
        <div className="stage__top">
          <OrderStages
            currentStage={props.currentStage}
            width={`71.5`}
            firstStageLink={props.firstStageLink}
          />
        </div>

        <div className="block-bg stage__wrapper">
          <form className="stage2__form">
            <div className="stage2__form-main">
              <div className="stage2__form-block">
                <div className="form__title">1. How we can contact you?</div>
                <div className="stage2__form-box">
                  <label className="stage2__form-item label-form label-error">
                    <input
                      className="stage2__form-item input-form"
                      type="email"
                      placeholder="Your e-mail"
                    />
                    <span className="input-placeholder-form">email</span>
                  </label>
                  <div className="stage2__form-item select__form-wrapper">
                    <SelectTransparent />
                  </div>
                  <label className="stage2__form-item label-form">
                    <input
                      className="input-form"
                      type="text"
                      placeholder="Your name"
                    />
                    <span className="input-placeholder-form">Your name</span>
                  </label>
                </div>
              </div>
              <div className="stage2__form-block">
                <div className="form__title">2. Account details</div>
                <div className="stage2__form-box">
                  <label className="stage2__form-item label-form">
                    <input
                      className="input-form"
                      type="text"
                      placeholder="Login"
                    />
                    <span className="input-placeholder-form">Login</span>
                  </label>
                  <label className="stage2__form-item stage2__form-item-password label-form">
                    <input
                      className="input-form"
                      type="password"
                      placeholder="password"
                    />
                    <span className="input-placeholder-form">password</span>
                  </label>
                  <label className="stage2__form-item label-form">
                    <input
                      className="input-form"
                      type="text"
                      placeholder="Nickname"
                    />
                    <span className="input-placeholder-form">Nickname</span>
                  </label>
                </div>
                <div className="stage2__form-box stage2__form-box-height">
                  <div className="stage2__form-item select__form-wrapper">
                    <SelectTransparent />
                    {/* <select className="select__form">
                      <option
                        className="select__form-item"
                        value
                        disabled
                        selected
                        hidden
                      >
                        Game server
                      </option>
                      <option className="select__form-item" value>
                        Server1
                      </option>
                      <option className="select__form-item" value="foo">
                        Server2
                      </option>
                      <option className="select__form-item" value="buz">
                        Server3
                      </option>
                      <option className="select__form-item" value="buz">
                        Server4
                      </option>
                      <option className="select__form-item" value="buz">
                        Server5
                      </option>
                    </select> */}
                  </div>
                  <div className="stage2__form-item select__form-wrapper">
                    <SelectTransparent />

                    {/* <select className="select__form">
                      <option
                        className="select__form-item"
                        value
                        disabled
                        selected
                        hidden
                      >
                        Vehicle type
                      </option>
                      <option className="select__form-item" value>
                        Viber
                      </option>
                      <option className="select__form-item" value="foo">
                        Telegram
                      </option>
                      <option className="select__form-item" value="buz">
                        Vkontakte
                      </option>
                      <option className="select__form-item" value="buz">
                        WhatsApp
                      </option>
                      <option className="select__form-item" value="buz">
                        Phone
                      </option>
                    </select> */}
                  </div>
                </div>
                <label className="label-form label__form-width">
                  <input
                    className="stage2__form-item stage2__form-item-width input-form"
                    type="text"
                    placeholder="Additional information and wishes for the order"
                  />
                  <span className="input-placeholder-form">
                    Additional information and wishes for the order
                  </span>
                </label>
              </div>
            </div>
            <div className="stage2__form-bottom">
              <div className="stage2__form-agreement">
                <div className="options-checkbox">
                  <label>
                    <input className="options-checkbox-input" type="checkbox" />
                    <span className="checkbox-circle"></span>
                    <span className="checkbox-text">
                      I have read and accept the Customer Agreemer. I also
                      consent to the processing of personal data.
                    </span>
                  </label>
                  <label>
                    <input className="options-checkbox-input" type="checkbox" />
                    <span className="checkbox-circle"></span>
                    <span className="checkbox-text">
                      Subscribe to our newsletter (optional).
                    </span>
                  </label>
                </div>
              </div>
              <div className="stage2__form-btn">
                <Link href="/stages/3">
                  <a className="button-color stage2__button">go to next step</a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderStage2;
