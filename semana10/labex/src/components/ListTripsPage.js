import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/airton-turing"

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

  const goToTripDetailsPage = (tripId) => {
    history.push(`/trips/details/${tripId}`);
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
      <h1>Lista de Viagens</h1>
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
                    <button onClick={() => goToTripDetailsPage(trip.id)}>Detalhes da viagem</button>
                    </div>
                })}
      </div>
    </div>
  );
}