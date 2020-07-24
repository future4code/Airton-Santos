import React, {useEffect} from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderDiv = styled.div`
  height: 10vh;
  width: 100vw;
`

export default function Header() {
  const history = useHistory();
  const token = window.localStorage.getItem("token")
  
  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/login");
    window.location.reload()
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const renderLoginLogout = () => {
      if (token === null) {
      return (<button onClick={goToLoginPage}>Admin</button>)
    } else {
      return (<><button onClick={goToListTripsPage}>Lista de viagens</button>
        <button onClick={handleLogout}>Logout</button></>)
    }
  }

  return (
    <HeaderDiv>
      <h1 onClick={goToHomePage}>LabeX</h1>
      {renderLoginLogout()}
    </HeaderDiv>
  );
}