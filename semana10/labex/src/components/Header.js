import React, {useEffect} from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Logo = styled.div`
  cursor: pointer;
  background-color: #ffffff;
  font-size: 3rem;
  font-weight: 900;
  color: black;
  width: 10rem;
  height: 4rem;
  border-radius: 12px 0px 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 45vw;
  border-bottom: 4px solid #2d98da;
  border-right: 4px solid #2d98da;
`

const HeaderDiv = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0em 3em 2em #2d98da;
`
const GoToLoginPageButton = styled.button`
  cursor: pointer;
  width: 96px;
  height: 36px;
  background-color: #45aaf2;
  border-radius: 0px 12px 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: 700;
  position: relative;
  left: 400px;
  outline: none;
`
const GoToListTripsPageButton = styled.button`
  cursor: pointer;
  width: 96px;
  height: 36px;
  background-color: #45aaf2;
  border-radius: 0px 12px 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: 700;
  position: relative;
  left: 400px;
  outline: none;
`
const HandleLogoutButton = styled.button`
  cursor: pointer;
  width: 96px;
  height: 36px;
  background-color: #45aaf2;
  border-radius: 0px 12px 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-weight: 700;
  position: relative;
  left: 400px;
  margin: 0 20px;
  outline: none;
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
      return (<GoToLoginPageButton onClick={goToLoginPage}>Admin</GoToLoginPageButton>)
    } else {
      return (<><GoToListTripsPageButton onClick={goToListTripsPage}>Viagens</GoToListTripsPageButton>
        <HandleLogoutButton onClick={handleLogout}>Logout</HandleLogoutButton></>)
    }
  }

  return (
    <HeaderDiv>
      <Logo onClick={goToHomePage}>LabeX</Logo>
      {renderLoginLogout()}
    </HeaderDiv>
  );
}