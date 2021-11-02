import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import SelectItem from "./SelectItem";
import SelectStartValue from "./SelectStartValue";

const SelectDarkBlue = ({list, addClass, defaultValue, doSelect}) => {

  const [isOpen, setIsOpen] = useState(false);

  const getIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const getSelectedOption = (e) => {
    setSelectedOption(e.target.innerText);
    setIsOpen(!isOpen);
    e.target.offsetParent.childNodes.forEach((i) => {
      i.classList.remove("progress-matchmaking-item-current");
    });
    e.target.classList.add("progress-matchmaking-item-current");
  };

  const [startValue, setStartValue] = useState();

  useEffect(() => {
    if (list) {
      setStartValue(defaultValue);
      doSelect(list[0].ID)
    }
  }, []);

  let selectList;
  if (list) {
    selectList = list.map((i) => (
      <SelectItem
        key={i.ID}
        id={i.ID}
        text={i.TEXT}
        action={getSelectedOption}
        addAction={doSelect}
      />
    ));
  }

  return (
    <>
      <div className={`progress-current-select ${addClass}`}>
        <div className="select__matchmaking-header" onClick={getIsOpen}>
          {selectedOption ? (
            selectedOption
          ) : (
            <SelectStartValue value={startValue} />
          )}
        </div>

        {isOpen ? (
          <>
            <div className="select__matchmaking-body select__matchmaking-body-open">
              {selectList}
            </div>
          </>
        ) : (
          <>
            <div className="select__matchmaking-body">{selectList}</div>
          </>
        )}
      </div>
    </>
  );
};

export default SelectDarkBlue;
