import React, { useContext } from "react";
import styled from "styled-components";
import { QueCountContext } from "../ChatBox/ChatBox";

const Response = styled.div`
  min-width: 60px;
  max-width: 500px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #4e78f6;
  border-radius: 16px 0px 16px 16px;
  align-self: flex-end;
  color: white;
`;

function UserResponse(props) {
  //using the question number from global state using Context api and hooks
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;
  const responses = props.responses;
  const currRespIndex = props.currIdx;
  //displaying user responses
  if (currRespIndex < questionNumber) {
    return <Response>{responses[currRespIndex]}</Response>;
  }
  return <></>;
}

export default UserResponse;
