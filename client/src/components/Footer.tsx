import React from "react";
import styled from "styled-components";

export default function Footer(): JSX.Element {
  return (
    <>
      <FooterBox>홈</FooterBox>
    </>
  );
}

const FooterBox = styled.footer`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background: DimGray;
`;
