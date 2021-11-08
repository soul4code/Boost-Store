const SelectItem =({action, text, id, index, isSelectIndex, addAction})=>{

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
        {text}
    </div>
}

export default SelectItem