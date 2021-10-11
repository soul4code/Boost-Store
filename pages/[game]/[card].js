import MainLayout from "../../components/layouts/Main";
import OptionsTemplate from "../../components/card-templates/options-template";
import MmrTemplate from "../../components/card-templates/mmr-template";
import WotTemplate from "../../components/card-templates/wot-template";

const Card = (props) => {
  console.log(props.PROPERTY_CARD_TEMPLATE_VALUE);

  const renderCardTemplate = (param) => {
    switch (param) {
      case "options":
        return <OptionsTemplate name={props.NAME} />;
        break;
      case "progress":
        return <MmrTemplate name={props.NAME} />;
        break;
      case "wot":
        return <WotTemplate name={props.NAME} />;
        break;
      default:
        return <OptionsTemplate name={props.NAME} />;
    }
  };

  return (
    <MainLayout title={props.NAME}>
      <div className="main__page">
        {renderCardTemplate(props.PROPERTY_CARD_TEMPLATE_VALUE)}
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://boost-center.com/api/products/${params.card}`
  );
  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: data };
}

export default Card;
