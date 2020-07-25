import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Countries from './Countries'
import useForm from '../hooks/useForm'
import Axios from "axios";

const MainContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubscriptionForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
width: 30rem;
height: 40rem;
margin-bottom: 8px;
background-color: #ecf0f3;
box-shadow: 0px 0px 10px #ffffff;
opacity: 0.92;
padding-top: 32px;
`
const Imput = styled.input`
width: 250px;
border: none;
outline: none;
background: none;
color: #555;
border-radius: 25px;
margin: 64px;
padding: 10px 5px 10px 20px;
box-shadow: inset 5px 5px 5px #cbced1,
            inset -5px -5px 5px #ffffff;
            :hover {
              background: #FFFFFF;
                  }
`
const Textarea = styled.textarea`
width: 250px;
border: none;
outline: none;
background: none;
color: #555;
border-radius: 25px;
margin: 64px;
padding: 10px 5px 10px 20px;
box-shadow: inset 5px 5px 5px #cbced1,
            inset -5px -5px 5px #ffffff;
            :hover {
              background: #FFFFFF;
                  }
`
const Select = styled.select`
width: 250px;
border: none;
outline: none;
background: none;
color: #555;
border-radius: 25px;
margin: 64px;
padding: 10px 5px 10px 20px;
box-shadow: inset 5px 5px 5px #cbced1,
            inset -5px -5px 5px #ffffff;
            :hover {
              background: #FFFFFF;
                  }
`
const Label = styled.label`
font-size: 1.2em;
font-weight: 600;
margin: -48px 64px;
`
const SendSubscription = styled.button`
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
outline: none;
`

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
      getTrips()
  }, [history])

  const getTrips = () => {  
    Axios.get(`${baseUrl}/trips`).then(response => {
      setTripsList(response.data.trips)
    }).catch(err => {
      console.log(err.message)
    })
  }

  const handleApplyToTrip = (e) => {
    e.preventDefault()
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.country,
      country: form.country
    }

    Axios.post(`${baseUrl}/trips/${form.tripChosen}/apply`, body)
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
    <MainContainer>
        <SubscriptionForm onSubmit={handleApplyToTrip}>
          <Label>Viagem</Label>
            <Select        
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
            </Select>
          <Label>Nome</Label>
          <Imput
            name="name"
            placeholder="Digite seu nome"
            pattern={"^.{5,}"}
            title="O nome deve ter no mínimo 3 letras"
            value={form.name}
            onChange={handleInputChange}
            required
          />
          <Label>Idade</Label>
          <Imput
            name="age"
            placeholder="Digite sua idade"
            type="number"
            min="18"
            value={form.age}
            onChange={handleInputChange}
            required
          />
          <Label>Porque sou um bom candidato(a)?</Label>
          <Textarea
            name="applicationText"
            placeholder="Escreva os motivos pelos quais devemos lhe escolher..."
            value={form.applicationText}
            onChange={handleInputChange}
            required
          />
          <Label>Profissão</Label>
          <Imput
            type="text"
            name="profession"
            placeholder="Sua profissão"
            value={form.profession}
            onChange={handleInputChange}
            required
          />
          <Label>País</Label>
            <Select        
            name="country"
            value={form.country}
            onChange={handleInputChange}
            required
            >
              <option value="" disable selected>Escolha um país</option>
              <Countries />
            </Select>
          <SendSubscription>Enviar</SendSubscription>
        </SubscriptionForm>
    </MainContainer>
  );
}