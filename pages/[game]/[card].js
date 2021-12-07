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
  const card = {
    ID: "1",
    NAME: "Dota 2 MMR Boosting",
    CODE: "dota-2-mmr-boosting",
    PROPERTY_CARD_TEMPLATE_VALUE: "progress",
    TITLE: null,
    DESCRIPTION:
      "С другой стороны рамки и место обучения кадров требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.",
    ADVANTAGES: [],
    IS_INPUT: false,
    IS_POSITION_LIST: false,
    POSITION_LIST: [
      {
        ID: 83,
        TEXT: "Herald",
        IMG: "https://boost-center.com/upload/iblock/19a/79aw43m3ir7i06n7mwaf58d8ow7dgrbr.webp",
        MIN: 0,
        MAX: 750,
      },
      {
        ID: 84,
        TEXT: "Guardian",
        IMG: "https://boost-center.com/upload/iblock/af6/e4vb2b8v3cmb20mhu3bqyxiomdxvxqrg.png",
        MIN: 751,
        MAX: 1400,
      },
      {
        ID: 85,
        TEXT: "Crusader",
        IMG: "https://boost-center.com/upload/iblock/033/56dtbjfxhjpbj139c1649vt8eoyn03t7.webp",
        MIN: 1401,
        MAX: 2000,
      },
      {
        ID: 86,
        TEXT: "Archon",
        IMG: "https://boost-center.com/upload/iblock/dfc/fhbzpx65aj3a0b2ohjd3gj6a6jhfxtjr.png",
        MIN: 2001,
        MAX: 2000,
      },
      {
        ID: 87,
        TEXT: "Legend",
        IMG: "https://boost-center.com/upload/iblock/b91/r3vzcrezq1dhjmfq0hmh774knp4ru5wa.webp",
        MIN: 2001,
        MAX: 2650,
      },
      {
        ID: 88,
        TEXT: "Ancient",
        IMG: "https://boost-center.com/upload/iblock/6f1/l62ks0jmh8qcewtp84o3p1ndwkizdfiy.webp",
        MIN: 2651,
        MAX: 3250,
      },
      {
        ID: 89,
        TEXT: "Divine",
        IMG: "https://boost-center.com/upload/iblock/68b/ms93wl0azvajp4757l2e1ofxtqbang6j.webp",
        MIN: 3251,
        MAX: 3850,
      },
      {
        ID: 90,
        TEXT: "Immortal",
        IMG: "https://boost-center.com/upload/iblock/107/i8aaw4daa7l4uxe1u0u2sipne84norfm.webp",
        MIN: 3851,
        MAX: 4500,
      },
    ],
    IS_PROGRESSBAR: true,
    DEFAULT_VALUE_FIRST: 1500,
    DEFAULT_VALUE_SECOND: 4500,
    MIN_VALUE: 0,
    MAX_VALUE: 4500,
    DENSITY: 500,
    STEP: 100,
    PRICE: "10",
    SIGN: "+",
    DAYS_IN_COUNT: 2,
    MEASURE: "$",
    IS_EXTRA_OPTIONS: true,
    EXTRA_OPTIONS: [
      {
        ID: 91,
        TITLE: "Какая-то опция",
        INFO: "выаываываыва",
        IS_PRICE: true,
        SIGN: "-",
        PRICE: "40.00 RUB",
        MEASURE: "$",
      },
    ],
  };
  return { props: card };
  const res = await fetch(`https://boost-center.com/api/making/${params.card}`);

  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: data };
}

export default Card;
