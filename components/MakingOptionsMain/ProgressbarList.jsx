
import Progressbar from "./Progressbar";

const ProgressbarList = ({ options, progressbar, getPriceList, getDaysList }) => {
  let progressList;

  if (progressbar) {
    progressList = progressbar.map((p, index) => (
      <Progressbar {...p} key={index} index={index} getPriceList={getPriceList} getDaysList={getDaysList}/>
    ));
  }

  

  return (
    <div className="matchmaking__card2-box matchmaking__card2-box-progress">
      <div className="subtitle__page">Options</div>
      {progressList}
    </div>
  );
};

export default ProgressbarList;
