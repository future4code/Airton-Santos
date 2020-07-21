import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProfilePhoto, ProfileCard, Bio, LikeUnlikeButtons, NameAndAge, ButtonLike, ButtonUnlike, InfoPeople, Description, Loader} from './style'

export default function Home() {
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/airton-santos-turing"
  const [profile, setProfile] = useState([])

  const getProfileToChoose = () => {
    axios.get(`${baseUrl}/person`)
    .then(response => {
        setProfile(response.data.profile)
    }).catch(err => {
        console.log(err.message)
    })
}

const onClickLike = () => {
  const body = {
    id: profile.id,
    choice: true,
  }
  axios.post(`${baseUrl}/choose-person`, body)
  .then(response => {
    getProfileToChoose()
  }).catch(err => {
      console.log(err.message)
  })
}

const onClickUnlike = () => {
  const body = {
    id: profile.id,
    choice: false,
  }
  axios.post(`${baseUrl}/choose-person`, body)
  .then(response => {
    getProfileToChoose()
  }).catch(err => {
      console.log(err.message)
  })
}
useEffect(() => {
  getProfileToChoose()
}, []);

  return (
    <ProfileCard>
      {profile ? <InfoPeople>
        <ProfilePhoto src={profile.photo} />
         <Description>
          <Bio>{profile.bio}</Bio>
          {profile.name && <NameAndAge>{profile.name}, {profile.age}</NameAndAge>}
        </Description>
      </InfoPeople> : <Loader>Por enquanto nao temos mais perfis para mostrar</Loader>}
      <LikeUnlikeButtons>
        {profile ? <ButtonLike onClick={onClickLike}>Like</ButtonLike> : <ButtonLike>Like</ButtonLike>}
        {profile ? <ButtonUnlike onClick={onClickUnlike}>Dislike</ButtonUnlike> : <ButtonUnlike>Dislike</ButtonUnlike>}
      </LikeUnlikeButtons>
    </ProfileCard>
  );
}