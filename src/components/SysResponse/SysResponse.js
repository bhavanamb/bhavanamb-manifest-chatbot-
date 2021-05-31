import React, { useContext } from "react";
import { QuestionBubble } from "../Question/SystemStyles";
import { QueCountContext } from "../ChatBox/ChatBox";

function SysResponse(props) {
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;
  const standardResponse = props.standardResponse;
  const currRespIndex = props.currIdx;
  let resLength = standardResponse.length;
  // displaying system standard responses
  if (currRespIndex < questionNumber && resLength) {
    return (
      <>
        <QuestionBubble>{standardResponse}</QuestionBubble>
      </>
    );
  }
  return <></>;
}

export default SysResponse;
