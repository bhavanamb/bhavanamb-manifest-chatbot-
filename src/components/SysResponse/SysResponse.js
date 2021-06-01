import React, { useContext, useEffect } from "react";
import { QuestionBubble } from "../Question/SystemStyles";
import { QueCountContext, QuesLoadingContext } from "../ChatBox/ChatBox";
import PageLoader from "../ChatBox/PageLoader";

function SysResponse(props) {
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;
  const standardResponse = props.standardResponse;
  const currRespIndex = props.currIdx;
  // const loading = props.isLoading;
  // const loadingStatus = props.setLoading;
  let resLength = standardResponse.length;
  const [loading, setLoading] = useContext(QuesLoadingContext);

  useEffect(
    (props) => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    },
    [loading]
  );
  const RenderSystemResponse = () => (
    <QuestionBubble>{standardResponse}</QuestionBubble>
  );
  // displaying system standard responses
  if (currRespIndex === questionNumber - 1 && resLength) {
    if (loading) {
      return <PageLoader />;
    }
    return RenderSystemResponse();
  } else if (currRespIndex < questionNumber && resLength) {
    return RenderSystemResponse();
  }
  return <></>;
}

export default SysResponse;
