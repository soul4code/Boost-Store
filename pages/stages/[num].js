import { useState } from 'react';
import MainLayout from '../../components/layouts/Main';
import OrderStage2 from "../../components/OrderStage2"
import OrderStage3 from "../../components/OrderStage3"
import {useRouter} from "next/router";

const Stages = (props)=>{
    const router = useRouter();

    let [numStage, setNumStage]=useState(2)



    return (
    <MainLayout title='Stage 2'>
        {router.query.num==2
        ?<OrderStage2 setNumStage={setNumStage}/>
        : ''
        }
        {router.query.num==3
        ?<OrderStage3 setNumStage={setNumStage}/>
        : ''
        }
    </MainLayout>
    )
}

export default Stages