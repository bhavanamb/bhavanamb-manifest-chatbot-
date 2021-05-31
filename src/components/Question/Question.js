import React, { useContext } from "react";
import { QuestionBubble } from "./SystemStyles";
import { QueCountContext } from "../ChatBox/ChatBox";

function Question(props) {
  //using the question number from global state using Context api and hooks
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;
  const question = props.currQuestion;
  const currRespIndex = props.currIdx;

  //displaying question only if use has answered and current question
  if (currRespIndex <= questionNumber) {
    return (
      <>
        <QuestionBubble>{question}</QuestionBubble>
      </>
    );
  }
  return <></>;
}

export default Question;
