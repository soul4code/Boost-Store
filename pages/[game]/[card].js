import MainLayout from "../../components/layouts/Main";
import OptionsTemplate from "../../components/card-templates/options-template";
import MmrTemplate from "../../components/card-templates/mmr-template";
import WotTemplate from "../../components/card-templates/wot-template";
import { useRouter } from "next/router";
import calculator from "../../calculator/main";
import { order$, orderService } from "../../akita_store/order";
import { useObservableState } from "observable-hooks";
import { useEffect } from "react";

const Card = (props) => {
  const router = useRouter();

  const calcData = calculator(props.PROPERTY_CARD_TEMPLATE_VALUE, props.CODE);

  const orderProps = useObservableState(order$);

  useEffect(() => {
    orderService.setOrderGame(router.query.game);
    orderService.setOrderCode(props.CODE);
  }, [props.CODE]);

  const renderCardTemplate = () => {
    switch (props.PROPERTY_CARD_TEMPLATE_VALUE) {
      case "options":
        return (
          <OptionsTemplate
            name={props.NAME}
            currentGame={router.query.game}
            {...props}
            calcData={calcData}
          />
        );
      case "progress":
        return (
          <MmrTemplate
            name={props.NAME}
            currentGame={router.query.game}
            {...props}
            calcData={calcData}
            orderProps={orderProps}
          />
        );
      case "wot":
        return (
          <WotTemplate
            name={props.NAME}
            currentGame={router.query.game}
            {...props}
            calcData={calcData}
          />
        );
      default:
        return (
          <OptionsTemplate
            name={props.NAME}
            currentGame={router.query.game}
            {...props}
            calcData={calcData}
          />
        );
    }
  };

  return (
    <MainLayout title={props.NAME}>
      <div className="main__page">
        {" "}
        {renderCardTemplate(props.PROPERTY_CARD_TEMPLATE_VALUE)}{" "}
      </div>{" "}
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://boost-center.com/api/making/${params.card}`);

  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: data };
}

export default Card;
