import Link from "next/link";
import OrderStages from "../OrderStages";

const OrderStage2 = (props) => {
  return (
    <>
      <div class="block-bg stage__wrapper">
        <OrderStages />
          <div class="block-bg stage__wrapper">
            <form class="stage2__form">
              <div class="stage2__form-main">
                <div class="stage2__form-block">
                  <div class="form__title">1. How we can contact you?</div>
                  <div class="stage2__form-box">
                    <label class="stage2__form-item label-form label-error">
                      <input
                        class="stage2__form-item input-form"
                        type="email"
                        placeholder="Your e-mail"
                      />
                      <span class="input-placeholder-form">email</span>
                    </label>
                    <div class="stage2__form-item select__form-wrapper">
                      <select class="select__form">
                        <option
                          class="select__form-item"
                          value
                          disabled
                          selected
                          hidden
                        >
                          Where we can contact you?
                        </option>
                        <option class="select__form-item" value>
                          Viber
                        </option>
                        <option class="select__form-item" value="foo">
                          Telegram
                        </option>
                        <option class="select__form-item" value="buz">
                          Vkontakte
                        </option>
                        <option class="select__form-item" value="buz">
                          WhatsApp
                        </option>
                        <option class="select__form-item" value="buz">
                          Phone
                        </option>
                      </select>
                    </div>
                    <label class="stage2__form-item label-form">
                      <input
                        class="input-form"
                        type="text"
                        placeholder="Your name"
                      />
                      <span class="input-placeholder-form">Your name</span>
                    </label>
                  </div>
                </div>
                <div class="stage2__form-block">
                  <div class="form__title">2. Account details</div>
                  <div class="stage2__form-box">
                    <label class="stage2__form-item label-form">
                      <input
                        class="input-form"
                        type="text"
                        placeholder="Login"
                      />
                      <span class="input-placeholder-form">Login</span>
                    </label>
                    <label class="stage2__form-item stage2__form-item-password label-form">
                      <input
                        class="input-form"
                        type="password"
                        placeholder="password"
                      />
                      <span class="input-placeholder-form">password</span>
                    </label>
                    <label class="stage2__form-item label-form">
                      <input
                        class="input-form"
                        type="text"
                        placeholder="Nickname"
                      />
                      <span class="input-placeholder-form">Nickname</span>
                    </label>
                  </div>
                  <div class="stage2__form-box stage2__form-box-height">
                    <div class="stage2__form-item select__form-wrapper">
                      <select class="select__form">
                        <option
                          class="select__form-item"
                          value
                          disabled
                          selected
                          hidden
                        >
                          Game server
                        </option>
                        <option class="select__form-item" value>
                          Server1
                        </option>
                        <option class="select__form-item" value="foo">
                          Server2
                        </option>
                        <option class="select__form-item" value="buz">
                          Server3
                        </option>
                        <option class="select__form-item" value="buz">
                          Server4
                        </option>
                        <option class="select__form-item" value="buz">
                          Server5
                        </option>
                      </select>
                    </div>
                    <div class="stage2__form-item select__form-wrapper">
                      <select class="select__form">
                        <option
                          class="select__form-item"
                          value
                          disabled
                          selected
                          hidden
                        >
                          Vehicle type
                        </option>
                        <option class="select__form-item" value>
                          Viber
                        </option>
                        <option class="select__form-item" value="foo">
                          Telegram
                        </option>
                        <option class="select__form-item" value="buz">
                          Vkontakte
                        </option>
                        <option class="select__form-item" value="buz">
                          WhatsApp
                        </option>
                        <option class="select__form-item" value="buz">
                          Phone
                        </option>
                      </select>
                    </div>
                  </div>
                  <label class="label-form label__form-width">
                    <input
                      class="stage2__form-item stage2__form-item-width input-form"
                      type="text"
                      placeholder="Additional information and wishes for the order"
                    />
                    <span class="input-placeholder-form">
                      Additional information and wishes for the order
                    </span>
                  </label>
                </div>
              </div>
              <div class="stage2__form-bottom">
                <div class="stage2__form-agreement">
                  <div class="options-checkbox">
                    <label>
                      <input class="options-checkbox-input" type="checkbox" />
                      <span class="checkbox-circle"></span>
                      <span class="checkbox-text">
                        I have read and accept the Customer Agreemer. I also
                        consent to the processing of personal data.
                      </span>
                    </label>
                    <label>
                      <input class="options-checkbox-input" type="checkbox" />
                      <span class="checkbox-circle"></span>
                      <span class="checkbox-text">
                        Subscribe to our newsletter (optional).
                      </span>
                    </label>
                  </div>
                </div>
                <div class="stage2__form-btn">
                  <Link href="/stages/3">
                    <a class="button-color stage2__button">go to next step</a>
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
