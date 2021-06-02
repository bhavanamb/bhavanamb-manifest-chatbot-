import React, { useContext } from "react";
import { ChoiceButton } from "./OptionStyles";
import { QueCountContext, QuesLoadingContext } from "../ChatBox/ChatBox";

function EndComponent(props) {
  //using the question number from global state
  const quesCounterContext = useContext(QueCountContext);
  const questionNumber = quesCounterContext.countQuestion;

  const handleClick = props.handleOptionClick;
  const currRespIndex = props.currIdx;
  const options = props.optionData;
  const [loadingContxt, setLoading] = useContext(QuesLoadingContext);

  // handling the user option click
  const handleButtonClick = (e) => {
    e.preventDefault();
    quesCounterContext.counterDispatch({ type: "resetQuestions" });
    handleClick(e.target.value, currRespIndex);
    setLoading(true);
  };

  //Displaying the options only for current question
  if (currRespIndex === questionNumber) {
    if (loadingContxt) {
      return null;
    }
    return (
      <>
        {options.map((responseOption, idx) => {
          return (
            <ChoiceButton
              key={idx}
              value={responseOption}
              onClick={handleButtonClick}
            >
              {responseOption}
            </ChoiceButton>
          );
        })}
      </>
    );
  }
  return <></>;
}

export default EndComponent;
