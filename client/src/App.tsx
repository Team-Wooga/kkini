import React from "react";
import "./App.css";
import Mainpage from "./pages/MainPage";
import CoverPage from "./pages/CoverPage";
import Footer from "./components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 412px;
  height: 915px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

function App() {
  return (
    <Background>
      <Wrapper>
        <CoverPage />
        <Mainpage />
      </Wrapper>
      <Footer />
    </Background>
  );
}

export default App;
