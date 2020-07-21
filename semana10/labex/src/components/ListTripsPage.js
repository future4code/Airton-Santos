import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function ListTripsPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Lista de Viagens</h1>
      <button onClick={goToTripDetailsPage}>Detalhes da viagem</button>
      <button onClick={goToCreateTripPage}>Criar viagem</button>
    </div>
  );
}