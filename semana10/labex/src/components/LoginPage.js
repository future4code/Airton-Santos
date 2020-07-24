import React from "react";
import axios from 'axios'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/airton-turing"

export default function LoginPage() {
  const history = useHistory();
  const { form, onChange } = useForm({
    email: "",
    password: ""
  });

  const handleLogIn = (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    const body = {
      email: form.email,
      password: form.password
    }

    axios.post(`${baseUrl}/login`, body)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/trips/list")
    }).catch(err => {
      alert("NAO BOMBOU!")
      window.location.reload()
    })
  }
  
  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
    <div>
      <form onSubmit={handleLogIn}>
        <label>E-mail</label>
        <input
          name="email"
          placeholder="Digite seu E-mail"
          type="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <label>Senha</label>
        <input
          name="password"
          placeholder="Digite sua senha"
          type="password"
          value={form.password}
          onChange={handleInputChange}
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
}