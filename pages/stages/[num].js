import { useState } from "react";
import MainLayout from "../../components/layouts/Main";
import OrderStage2 from "../../components/OrderStage2";
import OrderStage3 from "../../components/OrderStage3";
import { useRouter } from "next/router";

const Stages = (props) => {
  const router = useRouter();

  let [numStage, setNumStage] = useState(2);

  const currentStage = () => {
    switch (router.query.num) {
      case "2":
        return <MainLayout title="Stage 2">
          <OrderStage2 setNumStage={setNumStage} />
        </MainLayout>

      case '3':
        return <MainLayout title="Stage 3">
          <OrderStage3 setNumStage={setNumStage} />
        </MainLayout>
    }
  };

  return (
    <>
      {currentStage()}
    </>
  );
};

export default Stages;
