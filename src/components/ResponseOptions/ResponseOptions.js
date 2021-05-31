import React, { useContext } from "react";
import { ChoiceButton } from "./OptionStyles";
import { QueCountContext } from "../ChatBox/ChatBox";

function ResponseButton(props) {
  //using the question number from global state
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;

  const handleClick = props.handleOptionClick;
  const currRespIndex = props.currIdx;
  const options = props.optionData;

  // handling the user option click
  const handleButtonClick = (e) => {
    e.preventDefault();
    quesConterContext.counterDispatch("addQuestion");
    handleClick(e.target.value, currRespIndex);
  };

  //Displaying the options only for current question
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
