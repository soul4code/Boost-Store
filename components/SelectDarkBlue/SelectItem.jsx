const SelectItem =(props)=>{
    return <div className="progress-matchmaking-item" onClick={props.action}>{props.text}</div>
}

export default SelectItem