import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/airton-turing"

const MainContainer = styled.div`
  height: 80vh;
  overflow: auto;
`

export default function TripDetailsPage() {
  const history = useHistory();
  const params = useParams();
  const [tripDetailList, setTripDetailList] = useState([])

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      history.push("/login")
    } else {
        getTripDetail()
    }
  }, [history])

  const getTripDetail = () => {
    const token = window.localStorage.getItem("token")
  
    Axios.get(`${baseUrl}/trip/${params.tripId}`, {
      headers: {
        auth: token
      }
    }).then(response => {
        setTripDetailList(response.data.trip)
    }).catch(err => {
      console.log(err.message)
    })
  }

  const handleAproveCandidate = (candidateId) => {
    const token = window.localStorage.getItem("token")
    const body = {
        approve: true
    }
    const axiosConfig = {
      headers: {
        auth: token
      }  
    }

    Axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, axiosConfig)
    .then(() => {
      alert(`Candidato aprovado com sucesso!`)
      window.location.reload()
    })
    .catch((err) => {
      alert(`Voce nao pode aprovar o candidato, verifique os campos e tente novamente!`)
    })
  }

  const handleRefuseCandidate = (candidateId) => {
    const token = window.localStorage.getItem("token")
    const body = {
        approve: false
    }
    const axiosConfig = {
      headers: {
        auth: token
      }  
    }

    Axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, axiosConfig)
    .then(() => {
      alert(`Candidato reprovado com sucesso!`)
      window.location.reload()
    })
    .catch((err) => {
      alert(`Voce nao pode reprovar o candidato, verifique os campos e tente novamente!`)
    })
  }

  return (
    <MainContainer>
        <div>
        {tripDetailList.candidates && tripDetailList.candidates.map((detail) => {
                    return <div key={detail.id}> 
                                <h2>{detail.name}</h2>
                                <p>Pais: {detail.country}</p>
                                <p>Profissao: {detail.profession}</p>
                                <p>Idade: {detail.age}</p>
                                <p>{detail.applicationText}</p>
                                <button onClick={() => handleAproveCandidate(detail.id)}>Aprovar</button>
                                <button onClick={() => handleRefuseCandidate(detail.id)}>Recusar</button>
                            </div>
                })}

        </div>
        <div>
            <h1>Candidatos aprovados para esta viagem:</h1>
            {tripDetailList.approved && tripDetailList.approved.map((detail) => {
                    return <div key={detail.id}>
                                <p>{detail.name}</p>
                                <p>{detail.applicationText}</p>
                                <p>{detail.country}</p>
                                <p>{detail.profession}</p>
                                <p>{detail.age}</p>
                            </div>
                })}
        </div>
    </MainContainer>
  );
}