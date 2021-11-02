const SelectItem =({action, text, id, addAction})=>{
    return <div className="progress-matchmaking-item" onClick={(e)=>{action(e);addAction(id)}}>{text}</div>
}

export default SelectItem