import Link from "next/link";

const OrderStages = (props) => {
  debugger
  return (
    <>
      
        <div class="stage__top">
          <div class="stage-list">
            <div class="stage-list__item stage-list__item1 active">
              <p>Stage 1</p>
            </div>
            <div class="stage-list__item stage-list__item2 active">
              <p>Stage 2</p>
            </div>
            <div class="stage-list__item stage-list__item3">
              <p>Stage 3</p>
            </div>
            <div class="stage-list__bg"></div>
          </div>
          <div class="stage__top-text">
            {props.info}
          </div>
        </div>
      
    </>
  );
};

export default OrderStages;
