import styled from "styled-components";
import SemiBold from "../../fonts/SFUIText-Semibold.ttf";

export const ChoiceButton = styled.button`
  box-sizing: border-box;
  background-color: #4e78f6;
  border: None;
  border-radius: 0.6em;
  color: white;
  cursor: pointer;
  font-size: 20px;
  line-height: 45px;
  margin: 10px;
  width: 200px;
  padding: 2vh;
  text-decoration: none;
  font-family: ${SemiBold};
  @media (max-width: 480px) {
    width: 120px;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  text-align: center;
`;
