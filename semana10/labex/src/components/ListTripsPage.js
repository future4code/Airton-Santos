import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { baseUrl } from "./constants";
import Axios from "axios";

export default function ListTripsPage() {
  const history = useHistory();
  const [tripsList, setTripsList] = useState([])

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

  const goToHomePage = () => {
    history.push("/");
  };

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <h1 onClick={goToHomePage}>LabeX</h1>
      <h1>Lista de Viagens</h1>
      <button onClick={goToTripDetailsPage}>Detalhes da viagem</button>
      <button onClick={goToCreateTripPage}>Criar viagem</button>
      <button onClick={handleLogout}>Sair</button>
      <div>
        {tripsList.map((trip) => {
                    return <div key={trip.id}> 
                    <p>{trip.planet}</p>
                    <p>{trip.name}</p>
                    <p>{trip.date}</p>
                    <p>{trip.durationInDays}</p>
                    <p>{trip.description}</p>
                    {/* <button {trip.id}>detalhes da viagem</button> */}
                    </div>
                })}
      </div>
    </div>
  );
}