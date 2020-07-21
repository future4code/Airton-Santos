import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {MainMatchesCard, ProfilePhoto, MatchesCard, Bio, ClearMatchesButton} from './style'

export default function Matches() {
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/airton-santos-turing"
  const [matchesList, setMatchesList] = useState([])

const getMatches = () => {
  axios.get(`${baseUrl}/matches`)
  .then(response => {
    setMatchesList(response.data.matches)
  }).catch(err => {
      console.log(err.message)
  })
}

const onClickClearMatches = () => {
  axios.put(`${baseUrl}/clear`)
  .then(response => {
    setMatchesList([])
  }).catch(err => {
      console.log(err.message)
  })
}

useEffect(() => {
  getMatches()
}, []);

  return (
    <div>
      <MainMatchesCard>
          {matchesList.map(match => {
            return (
            <MatchesCard>
            <ProfilePhoto src={match.photo} />
            <Bio>{match.name}, {match.age} anos</Bio>
            </MatchesCard>
            )
          })}
      </MainMatchesCard>
      <ClearMatchesButton onClick={onClickClearMatches}>Clear Matches</ClearMatchesButton>
    </div>
  );
}