import React, { useContext } from "react";
import { QueCountContext } from "../ChatBox/ChatBox";
import { Response, EditOption } from "./ResponseStyles";

function UserResponse(props) {
  //using the question number from global state using Context api and hooks
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;
  const responses = props.responses;
  const currRespIndex = props.currIdx;

  //quesConterContext.counterDispatch("removeQuestion")

  const alertUser = () => {
    // const confirmBox = window.confirm(
    //   "Are you Sure? \n This will delete your answer and take you to previous step"
    // );
    // if (confirmBox === true) {
    //   quesConterContext.counterDispatch({
    //     type: "removeQuestion",
    //     index: currRespIndex,
    //   });
    // }
    let modalFlag = true;
    props.displayModal(modalFlag, "removeQuestion", currRespIndex);
  };
  //displaying user responses
  if (currRespIndex < questionNumber) {
    return (
      <Response>
        <EditOption
          onClick={() => {
            alertUser();
          }}
        />

        {responses[currRespIndex]}
      </Response>
    );
  }
  return <></>;
}

export default UserResponse;
