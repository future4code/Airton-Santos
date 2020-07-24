import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };
  return (
    <>
      <h1 onClick={goToHomePage}>LabeX</h1>
    </>
  );
}