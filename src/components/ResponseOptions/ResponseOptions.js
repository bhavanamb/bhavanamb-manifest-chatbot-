import React, { useContext } from "react";
import { ChoiceButton, ButtonContainer } from "./OptionStyles";
import { QueCountContext, QuesLoadingContext } from "../ChatBox/ChatBox";
import PageLoader from "../ChatBox/PageLoader";

function ResponseButton(props) {
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
    quesCounterContext.counterDispatch({ type: "addQuestion" });
    handleClick(e.target.value, currRespIndex);
    setLoading(true);
  };

  //Displaying the options only for current question
  if (currRespIndex === questionNumber && options.length) {
    if (loadingContxt) {
      return <PageLoader />;
    }
    return (
      <>
        <ButtonContainer>
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
        </ButtonContainer>
      </>
    );
  }
  return <></>;
}

export default ResponseButton;
