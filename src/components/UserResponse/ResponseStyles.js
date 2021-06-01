import styled from "styled-components";
import EditImg from "../../assets/editIcon.png";

export const Response = styled.div`
  min-width: 60px;
  max-width: 500px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #4e78f6;
  border-radius: 16px 0px 16px 16px;
  align-self: flex-end;
  color: white;
`;

export const EditOption = styled.div`
  background-image: url(${EditImg});
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  margin-top: -1.7em;
  margin-left: -1.3em;
  padding: 2px;
  font-size: 0.7em;
  cursor: pointer;
`;
