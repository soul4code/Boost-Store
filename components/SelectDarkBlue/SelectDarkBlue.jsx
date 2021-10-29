import { useState } from "react";
import { useStore } from "react-redux";
import SelectItem from "./SelectItem";
import SelectStartValue from "./SelectStartValue";

const SelectDarkBlue = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const getSelectedOption = (e) => {
    setSelectedOption(e.target.innerText);
    setIsOpen(!isOpen);
    console.log(e.target.offsetParent);
    e.target.offsetParent.childNodes.forEach((i) => {
      i.classList.remove("progress-matchmaking-item-current");
    });
    e.target.classList.add("progress-matchmaking-item-current");
  };

  const startValue = "silver1";
  const state = [
    { text: "silver1" },
    { text: "silver2" },
    { text: "silver3" },
    { text: "silver4" },
    { text: "silver5" },
    { text: "silver6" },
  ];

  let selectList = state.map((i, index) => (
    <SelectItem
      key={index}
      index={index}
      text={i.text}
      action={getSelectedOption}
    />
  ));

  return (
    <>
      <div className={`progress-current-select ${props.addClass}`}>
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
