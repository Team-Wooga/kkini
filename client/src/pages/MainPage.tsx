import React from "react";
import styled from "styled-components";

export default function Mainpage(): JSX.Element {
  // 유저 정보 상태 관리

  return (
    <>
      <Container>
        <h1>제목</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #fff;
`;
