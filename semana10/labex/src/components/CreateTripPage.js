import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function CreateTripPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Criar Viagem</h1>
    </div>
  );
}