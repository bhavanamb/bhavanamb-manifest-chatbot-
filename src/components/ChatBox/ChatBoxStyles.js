import styled from "styled-components";
import avatarImg from "../../assets/avatarImg.png";
import hamburgerIcon from "../../assets/hamburgerIcon.png";
export const ChatWrapper = styled.section`
  margin: auto;
  align-self: center;
  height: 100%;
  width: 50vw;
  background: #f4f4f4;
`;

export const AvatarImg = styled.div`
  background-image: url(${avatarImg});
  width: 120px;
  height: 124px;
  margin: 3% auto;
  padding: 0;
  background-repeat: no-repeat;
`;

export const Header = styled.div`
  height: 10%;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
`;

export const MenuBar = styled.div`
  background-image: url(${hamburgerIcon});
  width: 130px;
  height: 120px;
  position: absolute;
  background-repeat: no-repeat;
  top: 4%;
  left: 70%;
  cursor: pointer;
  display: block;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4e78f6;
`;

export const BotName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
export const SubTitle = styled.span`
  font-size: 0.5em;
  color: grey;
  opacity: 0.6;
`;

export const BubbleWrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  color: black;
`;

export const OptionsWrapper = styled.div`
  padding: 15px 15px;

  color: black;
`;
