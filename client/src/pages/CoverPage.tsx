import React from "react";
import styled from "styled-components";

export default function CoverPage(): JSX.Element {
  // 유저 정보 상태 관리

  return (
    <>
      <Container>
        <Title>Wooga-Chat</Title>
        <br />
        <Ment> 시청중인 드라마 </Ment>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const Title = styled.div`
  color: white;
`;

const Ment = styled.div`
  color: white;
`;
