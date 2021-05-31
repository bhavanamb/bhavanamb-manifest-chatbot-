import React from "react";
import { ChoiceButton } from "./OptionStyles";

function ResponseButton(props) {
  const handleClick = props.handleOptionClick;
  const currRespIndex = props.currIdx;
  const questionNumber = props.questionNumber;
  const options = props.optionData;
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleClick(e.target.value, currRespIndex);
  };
  if (currRespIndex === questionNumber) {
    return (
      <>
        {options.map((responseOption, idx) => (
          <ChoiceButton
            key={idx}
            value={responseOption}
            onClick={handleButtonClick}
          >
            {responseOption}
          </ChoiceButton>
        ))}
      </>
    );
  }
  return <></>;
}

export default ResponseButton;
