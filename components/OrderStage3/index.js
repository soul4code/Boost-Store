import OrderStages from "../OrderStages";

const OrderStage3 = (props) => {
  return (
    <>
      <div className="block-bg stage__wrapper">
        <div className="stage__top">
          <OrderStages width={`110`} firstStageLink={props.firstStageLink} />
        </div>

        <div className="stage3__content">
          <div className="stage3__content-box-main">
            <div className="stage3__content-text">
              <div className="form__title">Checkout</div>
              <div className="stage3__content-enum">
                <div className="enum stage3-enum">
                  <div className="enum__title">MM rank boost (s1 to ge)</div>
                  <div className="enum__dots">
                    .................................................................................................................
                  </div>
                  <div className="enum__resul">1 000$</div>
                </div>
                <div className="enum stage3-enum">
                  <div className="enum__title">+1 Win Extra</div>
                  <div className="enum__dots">
                    .................................................................................................................
                  </div>
                  <div className="enum__result">5$</div>
                </div>
                <div className="enum stage3-enum">
                  <div className="enum__title">Priority order</div>
                  <div className="enum__dots">
                    .................................................................................................................
                  </div>
                  <div className="enum__result">10%</div>
                </div>
                <div className="enum stage3-enum">
                  <div className="enum__title">Fees</div>
                  <div className="enum__dots">
                    .................................................................................................................
                  </div>
                  <div className="enum__result">40$</div>
                </div>
                <div className="enum stage3-enum">
                  <div className="enum__title">Live stream</div>
                  <div className="enum__dots">
                    .................................................................................................................
                  </div>
                  <div className="enum__result">20$</div>
                </div>
                <a href="#" className="edit__order">
                  Edit order
                </a>
              </div>
            </div>
          </div>
          <div className="stage3__content-box-pay">
            <div className="stage3__content-pay">
              <div className="form__title stage3__content-pay-title">
                Select a Payment Method
              </div>
              <div className="pay-method">
                <a className="pay-method-item" href="#">
                  <img src="img/pay/img1.png" alt="" />
                </a>
                <a className="pay-method-item" href="#">
                  <img src="img/pay/img2.png" alt="" />
                </a>
                <a className="pay-method-item" href="#">
                  <img src="img/pay/img3.png" alt="" />
                </a>
                <a className="pay-method-item" href="#">
                  <img src="img/pay/img4.png" alt="" />
                </a>
                <a className="pay-method-item" href="#">
                  <img src="img/pay/img5.png" alt="" />
                </a>
                <a className="pay-method-item" href="#">
                  <img src="img/pay/img6.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="stage3__content-box-total">
            <div className="stage3__promocode">
              <label className="label-form">
                <input
                  className="input-form"
                  type="text"
                  placeholder="Promocode"
                />
                <span className="input-placeholder-form">Promocode</span>
              </label>
            </div>
            <div className="stage3__content-text">
              <div className="enum stage3-enum">
                <div className="enum__title">Discount</div>
                <div className="enum__dots">
                  .................................................................................................................
                </div>
                <div className="enum__result">-50%</div>
              </div>
              <div className="enum stage3-enum">
                <div className="enum__title stage3-enum__high">Total</div>
                <div className="enum__dots">
                  .................................................................................................................
                </div>
                <div className="enum__result stage3-enum__high">705$</div>
              </div>
              <div className="enum stage3-enum">
                <div className="enum__title">Deadline</div>
                <div className="enum__dots">
                  .................................................................................................................
                </div>
                <div className="enum__result">30 days</div>
              </div>
            </div>
          </div>
          <div className="stage3__content-box stage3__content-box-choosed">
            <div className="stage3__content-info">
              <div className="stage3__choice-pay">
                You choosed: Visa, MasterCard
              </div>
              <div className="stage3__promocode">
                <label className="label-form">
                  <input
                    className="input-form"
                    type="text"
                    placeholder="Promocode"
                  />
                  <span className="input-placeholder-form">Promocode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="stage2__form-bottom stage3__form-bottom">
          <div className="stage2__form-agreement">
            <div className="options-checkbox">
              <label>
                <input className="options-checkbox-input" type="checkbox" />
                <span className="checkbox-circle"></span>
                <span className="checkbox-text">
                  I have read and accept the Customer Agreemer. I also consent
                  to the processing of personal data.
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
            <button className="button-color stage3__button">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStage3;
