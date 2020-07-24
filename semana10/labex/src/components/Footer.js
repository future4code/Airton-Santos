import React from 'react';
import styled from 'styled-components'

const FooterDiv = styled.div`
  height: 5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Footer() {
  return (
    <FooterDiv>
      <h3>Copyright© - Designed by: Airton Lopes - 2020</h3>
    </FooterDiv>
  );
}