const SelectItem =(props)=>{
    return <div className="select__form-item" onClick={props.action}>{props.text}</div>
}

export default SelectItem