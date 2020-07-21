import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function ApplicationFormPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };
  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Formulario de inscricao</h1>
    </div>
  );
}