import styled from "styled-components";
import RegularFont from "../../fonts/SFUIText-Regular.ttf";

export const QuestionBubble = styled.div`
  min-width: 60px;
  max-width: 500px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #efefef;
  border-radius: 16px 16px 16px 0px;
  align-self: flex-start;
  font-family: ${RegularFont};
  color: #000000;
  font-size: 15px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
