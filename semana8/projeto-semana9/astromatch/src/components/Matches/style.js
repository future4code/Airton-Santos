import styled from 'styled-components'

export const ProfilePhoto = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 40px;
`
export const MatchesCard = styled.div`
    display: flex;
    width: 350px;
    height: 20px;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 40px;
    justify-content: center;
`
export const Bio = styled.h4`
    display: flex;
    width: 350px;
    height: 20px;
`
export const MainMatchesCard = styled.div`
    width: 400px;
    height: 453px;
    overflow: auto;
`
export const ClearMatchesButton = styled.button`
    position: relative;
    top: 10px;
    left: 150px;
    margin-bottom: 20px;
    color: #fff;
    background-color: #762D93;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 8px;
    border-radius: 8px;
    font-weight: 600;
    &:hover {
      background-color: #ffffff;
      box-shadow: 0 0 1em #762D93;
      color: #762D93;
      transition: 250ms;
    }
    &:active {
      background-color: #762D93;
      transition: 250ms;
      color: #ffffff;
    }
`