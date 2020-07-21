import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function TripDetailsPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Detalhes da Viagem</h1>
    </div>
  );
}