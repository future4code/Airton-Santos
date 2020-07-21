import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Pagina de Login</h1>
      <button onClick={goToListTripsPage}>Fazer login</button>
    </div>
  );
}