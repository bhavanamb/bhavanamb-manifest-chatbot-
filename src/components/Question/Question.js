import React, { useContext, useEffect } from "react";
import { QuestionBubble } from "./SystemStyles";
import { QueCountContext, QuesLoadingContext } from "../ChatBox/ChatBox";
import PageLoader from "../ChatBox/PageLoader";

function Question(props) {
  //using the question number from global state using Context api and hooks
  const quesConterContext = useContext(QueCountContext);
  const questionNumber = quesConterContext.countQuestion;
  const question = props.currQuestion;
  const currRespIndex = props.currIdx;
  // const loading = props.isLoading;
  // const loadingStatus = props.setLoading;

  const [loading, setLoading] = useContext(QuesLoadingContext);

  const botQuestionArr = question.split("\n");
  // const [isLoading, setLoading] = useState(true);

  useEffect(
    (props) => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    },
    [loading]
  );
  const RenderQuestion = () => {
    return botQuestionArr.map((currQuestion, qidx) => {
      return <QuestionBubble key={qidx}>{currQuestion}</QuestionBubble>;
    });
  };

  //displaying question only if use has answered and current question
  if (currRespIndex === questionNumber && question.length > 0) {
    if (loading) {
      return <PageLoader />;
    }
    return RenderQuestion();
  } else if (currRespIndex <= questionNumber && question.length > 0) {
    return RenderQuestion();
  }
  return <></>;
}

export default Question;
