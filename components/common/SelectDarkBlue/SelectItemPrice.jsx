const SelectItem =({action, text, id, addAction, isSelectIndex, priceData})=>{

    const doIt = (e)=>{
        if(action){
            action(e);
        }
        if(addAction){
            if(isSelectIndex){
                addAction(index)
            } else{
                addAction(id)
            }
            
        }
    }

    return <div className="progress-matchmaking-item" onClick={(e)=>{doIt(e)}}>
        {text} ({priceData.SIGN}{priceData.PRICE}{priceData.MEASURE})
    </div>
}

export default SelectItem