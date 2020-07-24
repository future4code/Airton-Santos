import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  width: 100vw;
  height: 80vh;
`

export default function HomePage() {
  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/application-form");
  };

  return (
    <MainContainer>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
    </MainContainer>
  );
}