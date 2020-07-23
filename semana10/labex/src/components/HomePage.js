import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToApplicationFormPage = () => {
    history.push("/application-form");
  };

  return (
    <div>
      <button onClick={goToLoginPage}>Pagina de login</button>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
    </div>
  );
}