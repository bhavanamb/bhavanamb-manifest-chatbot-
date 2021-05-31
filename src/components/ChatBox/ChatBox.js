import React, { useState } from "react";
import data from "../../data.json";
import Question from "../Question/Question";
import UserResponse from "../UserResponse/UserResponse";
import ResponseOptions from "../ResponseOptions/ResponseOptions";
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
const RenderConversation = () => {
  const [questionNumber, setQueNumber] = useState(0);
  const [userResponse, setResponse] = useState({});
  const onOptionClick = (btnValue, currQuestionIdx) => {
    const respValue = {};
    respValue[currQuestionIdx] = btnValue;
    setResponse({ ...userResponse, ...respValue });
    setQueNumber(questionNumber + 1);
  };
  console.log(userResponse);
  console.log(setQueNumber);
  return (
    <div>
      {data.map((obj, currIdx) => (
        <div key={currIdx}>
          <BubbleWrapper>
            <Question
              questionNumber={questionNumber}
              currIdx={currIdx}
              currQuestion={obj.question}
              standardResponse={obj.standardResponse}
            />
          </BubbleWrapper>
          <OptionsWrapper>
            <ResponseOptions
              questionNumber={questionNumber}
              optionData={obj.options}
              currIdx={currIdx}
              handleOptionClick={onOptionClick}
            />
          </OptionsWrapper>
          <BubbleWrapper>
            <UserResponse
              responses={userResponse}
              currIdx={currIdx}
              questionNumber={questionNumber}
            />
          </BubbleWrapper>
        </div>
      ))}
    </div>
  );
};

function ChatBox() {
  return (
    <ChatWrapper>
      <Header>
        <Title>Manifest</Title>
        <MenuBar></MenuBar>
      </Header>
      <AvatarImg></AvatarImg>
      <BotName>
        Henry
        <br />
        <SubTitle>TRANSFER SPECIALIST</SubTitle>
      </BotName>
      {RenderConversation()}
      {/* <OptionsWrapper>
        <ResponseOptions />
      </OptionsWrapper> */}

      {/* <BubbleWrapper>
        <UserResponse />
      </BubbleWrapper> */}
    </ChatWrapper>
  );
}

export default ChatBox;
