import styled from 'styled-components'

export const ProfilePhoto = styled.img`
  width: 100%;
  height: 100%;
` 
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InfoPeople = styled.div `
    width: 400px;
    height: 450px;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  bottom: 200px;
  margin-left: 16px;
  margin-right: 16px;
`
export const Bio = styled.h2`
  color: #fff;
  font-size: 1.3em;
  font-weight: 500;
  text-shadow: black 3px 3px 5px;
`
  export const NameAndAge = styled.h2`
  color: #fff;
  font-size: 1.8em;
  font-weight: 700;
  text-shadow: black 3px 3px 5px;
`
  export const LikeUnlikeButtons = styled.div`
    width: 400px;
    height: 40px;
    position: relative;
    bottom: 0px;
    padding-bottom: 10px;
`
export const ButtonLike = styled.button `
    position: relative;
    bottom: -10px;
    left: 250px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: green;
    color: #ffffff;
    border-radius: 10px;
    width: 60px;
    height: 30px;
    &:hover {
      background-color: #ffffff;
      box-shadow: 0 0 1em green;
      color: green;
      transition: 250ms;
    }
    &:active {
      background-color: green;
      color: #ffffff;
      transition: 250ms;
    }
`
export const ButtonUnlike = styled.button `
    position: relative;
    bottom: -10px;
    left: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: red;
    color: #ffffff;
    border-radius: 10px;
    width: 60px;
    height: 30px;
    &:hover {
      background-color: #ffffff;
      box-shadow: 0 0 1em red;
      color: red;
      transition: 50ms;
    }
    &:active {
      background-color: red;
      color: #ffffff;
      transition: 50ms;
    }
`
export const Loader = styled.p `
  height: 380px;
  color: #762D93;
  font-weight: 500;
`