import React, { useState } from "react";
import axios from 'axios'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { baseUrl } from './constants';
import useInput from '../hooks/useInput'

export default function LoginPage() {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const history = useHistory();

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    }

    axios.post(`${baseUrl}/login`, body)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/trips/list")
    }).catch(err => {
      alert("NAO BOMBOU!")
    })
  }

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Pagina de Login</h1>
      <input type="email" value={email} onChange={setEmail} />
      <input type="password"  value={password} onChange={setPassword} />
      <button onClick={handleLogin}>Fazer login</button>
    </div>
  );
}