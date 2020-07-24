import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Countries from './Countries'
import useForm from '../hooks/useForm'
import Axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/airton-turing"

export default function ApplicationFormPage() {
  const history = useHistory();
  const [tripsList, setTripsList] = useState([])
  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripChosen: ""
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      history.push("/login")
    } else {
      getTrips()
    }
  }, [history])

  const getTrips = () => {
    const token = window.localStorage.getItem("token")
  
    Axios.get(`${baseUrl}/trips`, {
      headers: {
        auth: token
      }
    }).then(response => {
      setTripsList(response.data.trips)
    }).catch(err => {
      console.log(err.message)
    })
  }

  const handleApplyToTrip = (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.country,
      country: form.country
    }
    const axiosConfig = {
      headers: {
        auth: token
      }  
    }

    Axios.post(`${baseUrl}/trips/${form.tripChosen}/apply`, body, axiosConfig)
    .then(() => {
      alert(`Cadastro realizado com sucesso!`)
      history.push("/")
    })
    .catch((err) => {
      alert(`Voce nao pode se cadastrar, verifique os campos e tente novamente!`)
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
    <div>
      <form onSubmit={handleApplyToTrip}>
        <label>Viagem</label>
          <select        
          name="tripChosen"
          placeholder="Escolha uma viagem"
          value={form.tripChosen}
          onChange={handleInputChange}
          required
          >
            <option value="">Escolha uma viagem</option>
            {tripsList.map((trip) => {
              return <option value={trip.id} key={trip.id}>{trip.name}</option>
            })}
          </select>
        <label>Nome</label>
        <input
          name="name"
          placeholder="Digite seu nome"
          pattern={"^.{5,}"}
          title="O nome deve ter no mínimo 3 letras"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <label>Idade</label>
        <input
          name="age"
          placeholder="Digite sua idade"
          type="number"
          min="18"
          value={form.age}
          onChange={handleInputChange}
          required
        />
        <label>Porque sou um bom candidato(a)?</label>
        <textarea
          name="applicationText"
          rows="10"
          cols="36"
          placeholder="Escreva os motivos pelos quais devemos lhe escolher..."
          value={form.applicationText}
          onChange={handleInputChange}
          required
        />
        <label>Profissão</label>
        <input
          type="text"
          name="profession"
          placeholder="Sua profissão"
          value={form.profession}
          onChange={handleInputChange}
          required
        />
        <label>País</label>
          <select        
          name="country"
          placeholder="Escolha um país"
          value={form.country}
          onChange={handleInputChange}
          required
          >
            <option value="">Escolha um país</option>
            <Countries />
          </select>
        <button>Enviar</button>
      </form>
    </div>
  );
}