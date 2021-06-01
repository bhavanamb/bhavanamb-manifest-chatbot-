import React, { useState, useReducer } from "react";
import data from "../../data.json";
import Question from "../Question/Question";
import UserResponse from "../UserResponse/UserResponse";
import ResponseOptions from "../ResponseOptions/ResponseOptions";
import SysResponse from "../SysResponse/SysResponse";
import DateComponent from "../ResponseOptions/DateComponent";
import EndComponent from "../ResponseOptions/EndComponent";

import {
  ChatWrapper,
  AvatarImg,
  Header,
  MenuBar,
  Title,
  BotName,
  SubTitle,
  BubbleWrapper,
  OptionsWrapper,
} from "./ChatBoxStyles";

//creating a context to track the question count
export const QueCountContext = React.createContext();

export const QuesLoadingContext = React.createContext([true, () => {}]);

const initialCount = 0;

//reducer function to render state based on the action
const reducer = (state, action) => {
  switch (action.type) {
    case "addQuestion":
      return state + 1;
    case "removeQuestion":
      return action.index;
    case "resetQuestions":
      return initialCount;
    default:
      return state;
  }
};

const RenderConversation = (questionCount, dispatchCounter) => {
  const [userResponse, setResponse] = useState({});
  // on option click storing the user responses

  const loadingHook = useState(true);
  const onOptionClick = (btnValue, currQuestionIdx) => {
    const respValue = {};
    respValue[currQuestionIdx] = btnValue;
    setResponse({ ...userResponse, ...respValue });
  };

  return (
    <QueCountContext.Provider
      value={{
        countQuestion: questionCount,
        counterDispatch: dispatchCounter,
      }}
    >
      <QuesLoadingContext.Provider value={loadingHook}>
        <div>
          {data.map((obj, currIdx) => {
            return currIdx !== data.length - 1 ? (
              <div key={currIdx}>
                <BubbleWrapper>
                  <Question
                    currIdx={currIdx}
                    currQuestion={obj.question}
                    standardResponse={obj.standardResponse}
                  />
                </BubbleWrapper>
                <OptionsWrapper>
                  {obj.options[0] !== "Date" ? (
                    <ResponseOptions
                      optionData={obj.options}
                      currIdx={currIdx}
                      handleOptionClick={onOptionClick}
                    />
                  ) : (
                    <DateComponent
                      currIdx={currIdx}
                      handleOptionClick={onOptionClick}
                    />
                  )}
                </OptionsWrapper>
                <BubbleWrapper>
                  <UserResponse responses={userResponse} currIdx={currIdx} />
                </BubbleWrapper>
                <BubbleWrapper>
                  <SysResponse
                    currIdx={currIdx}
                    standardResponse={obj.standardResponse}
                  />
                </BubbleWrapper>
              </div>
            ) : (
              <div key={currIdx}>
                <OptionsWrapper>
                  <EndComponent
                    optionData={obj.options}
                    currIdx={currIdx}
                    handleOptionClick={onOptionClick}
                  />
                </OptionsWrapper>
              </div>
            );
          })}
        </div>
      </QuesLoadingContext.Provider>
    </QueCountContext.Provider>
  );
};

function ChatBox() {
  const [questionCount, dispatchCounter] = useReducer(reducer, initialCount);
  return (
    <ChatWrapper>
      <Header>
        <Title>Manifest</Title>
        <MenuBar
          onClick={() => dispatchCounter({ type: "resetQuestions" })}
        ></MenuBar>
      </Header>
      <AvatarImg></AvatarImg>
      <BotName>
        Henry
        <br />
        <SubTitle>TRANSFER SPECIALIST</SubTitle>
      </BotName>
      {RenderConversation(questionCount, dispatchCounter)}
    </ChatWrapper>
  );
}

export default ChatBox;
