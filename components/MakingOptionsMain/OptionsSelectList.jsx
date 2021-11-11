import OptionsSelect from "./OptionsSelect";

const OptionsSelectList = (props) => {

  let list
  if(props.input){
    list = props.input.map((i, index)=>(
      <OptionsSelect {...i} key={i.ID} index={index} getSelectPriceList={props.getSelectPriceList}/>
    ))
  }

  return (
    <>
    {list}
    </>
  );
};

export default OptionsSelectList;
