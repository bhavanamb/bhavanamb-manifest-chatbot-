import ChatBox from "../src/components/ChatBox/ChatBox";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto auto;
  max-width: 867px;
  height: 100%;
  border-radius: 5px;
`;

function App() {
  return (
    <Wrapper>
      <ChatBox />
    </Wrapper>
  );
}

export default App;
