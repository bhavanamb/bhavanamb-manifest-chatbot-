import React from "react";
import styled from "styled-components";

const QuestionBubble = styled.div`
  min-width: 60px;
  max-width: 500px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #efefef;
  border-radius: 16px 16px 16px 0px;
  border: 1px solid #666;
  align-self: flex-start;
`;

function Question(props) {
  const question = props.currQuestion;
  const currRespIndex = props.currIdx;
  const questionNumber = props.questionNumber;
  const standardResponse = props.standardResponse;
  if (currRespIndex <= questionNumber) {
    if (standardResponse.length) {
      return (
        <>
          <QuestionBubble>{standardResponse}</QuestionBubble>
          <QuestionBubble>{question}</QuestionBubble>
        </>
      );
    }
    return <QuestionBubble>{question}</QuestionBubble>;
  }
  return <></>;
}

export default Question;
