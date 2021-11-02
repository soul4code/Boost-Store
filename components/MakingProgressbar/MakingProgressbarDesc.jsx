import ProgressbarItem from "./ProgressbarItem";

const MakingProgressbarDesc = ({list}) => {

    let listItems
    if(list){
        listItems = list.map(i=>(
            <ProgressbarItem text={i.TEXT} id={i.ID}/>
        ))
    }
    console.log(listItems)
  return (
    <div className="matchmaking__progressbar-desk">
      {listItems}
    </div>
  );
};

export default MakingProgressbarDesc;
