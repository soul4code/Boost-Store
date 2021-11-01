import MainLayout from "../../components/layouts/Main";
import OptionsTemplate from "../../components/card-templates/options-template";
import MmrTemplate from "../../components/card-templates/mmr-template";
import WotTemplate from "../../components/card-templates/wot-template";
import { useRouter } from "next/router";

const Card = (props) => {
  const router = useRouter();

  const renderCardTemplate = () => {
    switch (props.PROPERTY_CARD_TEMPLATE_VALUE) {
      case "options":
        return (
          <OptionsTemplate name={props.NAME} currentGame={router.query.game} />
        );
        break;
      case "progress":
        return (
          <MmrTemplate name={props.NAME} currentGame={router.query.game} />
        );
        break;
      case "wot":
        return (
          <WotTemplate name={props.NAME} currentGame={router.query.game} {...props}/>
        );
        break;
      default:
        return (
          <OptionsTemplate name={props.NAME} currentGame={router.query.game} />
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

  const res = await fetch(
    `https://boost-center.com/api/making/${params.card}`);

  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: data };
}

export default Card;
