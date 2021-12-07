import MainLayout from "../../components/layouts/Main";
import OrderStage2 from "../../components/OrderStage2";
import OrderStage3 from "../../components/OrderStage3";
import { useRouter } from "next/router";
import { useObservableState } from "observable-hooks";
import { order$ } from "../../akita_store/order";

const Stages = (props) => {
  const router = useRouter();

  const orderState = useObservableState(order$);

  const firstStageLink = `/${orderState?.game}/${orderState?.code}/`;

  const currentStage = () => {
    switch (router.query.num) {
      case "2":
        return (
          <MainLayout title="Stage 2">
            <OrderStage2
              currentStage={orderState?.stage}
              firstStageLink={firstStageLink}
            />
          </MainLayout>
        );

      case "3":
        return (
          <MainLayout title="Stage 3">
            <OrderStage3
              currentStage={orderState?.stage}
              firstStageLink={firstStageLink}
            />
          </MainLayout>
        );
    }
  };

  return <>{currentStage()}</>;
};

export default Stages;
