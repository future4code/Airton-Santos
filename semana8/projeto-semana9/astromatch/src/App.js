import React, {useState} from 'react';
import Home from "./components/Home/home"
import Matches from "./components/Matches/Matches"
import logo from "./images/logo.png"
import {MainScreen, AppContainer, AppHeader, AppTitle, Button1, Button2} from "./style"

export default function App() {
  const [screen, setScreen] = useState(true)

  const onClickChangeScreen = () => {
    setScreen(!screen)
  }

  const changeButton = () => {
    return screen ?
    <Button2 onClick={onClickChangeScreen}>💖💥</Button2>:
    <Button1 onClick={onClickChangeScreen}>👩👨</Button1>
  }

  return (
    <MainScreen>
      <AppContainer>
        <AppHeader>
          <AppTitle src={logo} alt="imagem" />
          {changeButton()}
        </AppHeader>
        {screen ? <Home /> : <Matches />}
      </AppContainer>
    </MainScreen>
  );
}