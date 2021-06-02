import styled from "styled-components";
import avatarImg from "../../assets/avatarImg.png";
import hamburgerIcon from "../../assets/hamburgerIcon.png";
import avatarImgSmall from "../../assets/avatarImgSmall.png";
import BoldFont from "../../fonts/SFUIText-Bold.ttf";

export const ChatWrapper = styled.section`
  margin: auto;
  align-self: center;
  height: 100%;
  width: 50vw;
  background: #f4f4f4;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const AvatarImg = styled.div`
  background-image: url(${avatarImg});
  width: 129px;
  height: 124px;
  margin: 3% auto;
  padding: 0;
  background-repeat: no-repeat;
  // @media (max-width: 480px) {
  //   background: url(${avatarImgSmall}) !important;
  //   margin: 20% 40%;
  //   background-repeat: no-repeat !important;
  // }
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
  @media (max-width: 480px) {
    width: 16px;
    height: 78px;
    left: 91%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #4e78f6;
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const BotName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-family: ${BoldFont};
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
