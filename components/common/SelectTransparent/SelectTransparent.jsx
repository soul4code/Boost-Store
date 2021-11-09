import { useState } from "react";
import SmallArrBottom from "../SmallArrBottom";
import SelectItem from "./SelectItem";
import SelectStartValue from "./SelectStartValue";

const SelectTransparent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const getSelectedOption = (e) => {
    setSelectedOption(e.target.innerText);
    setIsOpen(!isOpen);
  };

  const startValue = "Where we can contact you?";
  const state = [
    { text: "Viber" },
    { text: "Telegram" },
    { text: "Vkontakte" },
    { text: "WhatsApp" },
    { text: "Phone" },
  ];

  let selectList = state.map((i, index) => (
    <SelectItem key={index} text={i.text} action={getSelectedOption} />
  ));

  return (
    <>
      <div className="select__form">
        <div className="select__form-header" onClick={getIsOpen}>
          {selectedOption ? (
            selectedOption
          ) : (
            <SelectStartValue value={startValue} />
          )}
        </div>

        {isOpen ? (
            <>
          <div className="select__form-body select__form-body-open">
            {selectList}
          </div>
          <SmallArrBottom addClass='select__form-isOpen'/>
          </>
        ) : (
            <>
          <div className="select__form-body"></div>
          <SmallArrBottom addClass=''/>
          </>
        )}

      </div>
    </>
  );
};

export default SelectTransparent;
