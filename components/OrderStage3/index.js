import Link from "next/link";
import OrderStages from "../OrderStages";

const OrderStage3 = (props) => {
  return (
    <>
      <div class="block-bg stage__wrapper">
        <OrderStages />
        <div class="stage3__content">
          <div class="stage3__content-box-main">
            <div class="stage3__content-text">
              <div class="form__title">Checkout</div>
              <div class="stage3__content-enum">
                <div class="enum stage3-enum">
                  <div class="enum__title">MM rank boost (s1 to ge)</div>
                  <div class="enum__dots">
                    .................................................................................................................
                  </div>
                  <div class="enum__resul">1 000$</div>
                </div>
                <div class="enum stage3-enum">
                  <div class="enum__title">+1 Win Extra</div>
                  <div class="enum__dots">
                    .................................................................................................................
                  </div>
                  <div class="enum__result">5$</div>
                </div>
                <div class="enum stage3-enum">
                  <div class="enum__title">Priority order</div>
                  <div class="enum__dots">
                    .................................................................................................................
                  </div>
                  <div class="enum__result">10%</div>
                </div>
                <div class="enum stage3-enum">
                  <div class="enum__title">Fees</div>
                  <div class="enum__dots">
                    .................................................................................................................
                  </div>
                  <div class="enum__result">40$</div>
                </div>
                <div class="enum stage3-enum">
                  <div class="enum__title">Live stream</div>
                  <div class="enum__dots">
                    .................................................................................................................
                  </div>
                  <div class="enum__result">20$</div>
                </div>
                <a href="#" class="edit__order">
                  Edit order
                </a>
              </div>
            </div>
          </div>
          <div class="stage3__content-box-pay">
            <div class="stage3__content-pay">
              <div class="form__title stage3__content-pay-title">
                Select a Payment Method
              </div>
              <div class="pay-method">
                <a class="pay-method-item" href="#">
                  <img src="img/pay/img1.png" alt="" />
                </a>
                <a class="pay-method-item" href="#">
                  <img src="img/pay/img2.png" alt="" />
                </a>
                <a class="pay-method-item" href="#">
                  <img src="img/pay/img3.png" alt="" />
                </a>
                <a class="pay-method-item" href="#">
                  <img src="img/pay/img4.png" alt="" />
                </a>
                <a class="pay-method-item" href="#">
                  <img src="img/pay/img5.png" alt="" />
                </a>
                <a class="pay-method-item" href="#">
                  <img src="img/pay/img6.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div class="stage3__content-box-total">
            <div class="stage3__promocode">
              <label class="label-form">
                <input class="input-form" type="text" placeholder="Promocode" />
                <span class="input-placeholder-form">Promocode</span>
              </label>
            </div>
            <div class="stage3__content-text">
              <div class="enum stage3-enum">
                <div class="enum__title">Discount</div>
                <div class="enum__dots">
                  .................................................................................................................
                </div>
                <div class="enum__result">-50%</div>
              </div>
              <div class="enum stage3-enum">
                <div class="enum__title stage3-enum__high">Total</div>
                <div class="enum__dots">
                  .................................................................................................................
                </div>
                <div class="enum__result stage3-enum__high">705$</div>
              </div>
              <div class="enum stage3-enum">
                <div class="enum__title">Deadline</div>
                <div class="enum__dots">
                  .................................................................................................................
                </div>
                <div class="enum__result">30 days</div>
              </div>
            </div>
          </div>
          <div class="stage3__content-box stage3__content-box-choosed">
            <div class="stage3__content-info">
              <div class="stage3__choice-pay">
                You choosed: Visa, MasterCard
              </div>
              <div class="stage3__promocode">
                <label class="label-form">
                  <input
                    class="input-form"
                    type="text"
                    placeholder="Promocode"
                  />
                  <span class="input-placeholder-form">Promocode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="stage2__form-bottom stage3__form-bottom">
          <div class="stage2__form-agreement">
            <div class="options-checkbox">
              <label>
                <input class="options-checkbox-input" type="checkbox" />
                <span class="checkbox-circle"></span>
                <span class="checkbox-text">
                  I have read and accept the Customer Agreemer. I also consent
                  to the processing of personal data.
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
            <button class="button-color stage3__button">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStage3;
