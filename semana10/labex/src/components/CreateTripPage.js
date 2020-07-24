import React from "react";
import styled from "styled-components";
import useForm from '../hooks/useForm'
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function CreateTripPage() {
  const history = useHistory();
    const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });  
  
  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      history.push("/login")
    }
  }, [history])

  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/airton-turing"

  const today = new Date().toISOString().split("T")[0]

  const handleCreateTrip = (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    const [year, month, day] = form.date.split("-")
    const body = {
      name: form.name,
      planet: form.planet,
      date: `${day}/${month}/${year}`,
      description: form.description,
      durationInDays: form.durationInDays
    }
    const axiosConfig = {
      headers: {
        auth: token
      }  
    }

    Axios.post(`${baseUrl}/trips`, body, axiosConfig)
    .then(() => {
      alert(`Viagem cadastrada com sucesso!`)
      history.push("/trips/list")
    })
    .catch((err) => {
      alert(`Viagem nao criada, verifique os campos e tente novamente!`)
      window.location.reload()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
      <form onSubmit={handleCreateTrip}>
        <label>Nome da viagem</label>
        <input
          name="name"
          placeholder="Digite o nome da viagem"
          pattern={"^.{5,}"}
          title="O nome da viagem deve ter no mínimo 5 letras"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <label>Selecione o planeta de destino</label>
        <select
        name="planet"
        value={form.planet}
        onChange={handleInputChange}
        required
        >
          <option value="">Escolha um planeta</option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
          <option value="Plutão">Plutão</option>
        </select>
        <label>Data</label>
        <input
          type="date"
          name="date"
          placeholder="Escolha a data de partida da Terra"
          min={today}
          value={form.date}
          onChange={handleInputChange}
          required
        />
        <label>Descrição</label>
        <input
          type="text"
          name="description"
          placeholder="Descrição da viagem"
          pattern={"[A-Za-z]{30,}"}
          value={form.description}
          onChange={handleInputChange}
          required
        />
        <label>Duração em dias</label>
        <input
          name="durationInDays"
          placeholder="Digite a duaração da viagem"
          type="number"
          min="50"
          value={form.durationInDays}
          onChange={handleInputChange}
          required
        />
        <button>Criar viagem</button>
    </form>
  );
}