import React, { useState, useEffect } from "react";
import useForm from './hooks/useForm'
import axios from 'axios';
import styled from 'styled-components';

const PlannerContainer = styled.div`
  padding: 1vh 1vw;
`
const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  color: #673AB7;
`
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
`
const PlannerDaysContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const TaskLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 16px 16px 16px;
`
const DayOfWeekColumn = styled.div`
  width: 450px;
  height: 300px;
  text-align: center;
  margin: 8px;
  box-shadow: 0em 0em 6em -1em #673AB7;
  border-radius: 1em;
  overflow: auto;
`
const WeekDayTitle = styled.h1`
  color: gray;
  font-size: 1.5rem;
  border-bottom: 3px solid gray;
  padding-bottom: 3px;
`
const Input = styled.input`
  width: 260px;
  margin: 8px;
  outline: none;
  border-radius: 10px;
  padding-left: 5px;
`
const Select = styled.select`
  width: 138px;
  margin: 8px;
  outline: none;
  border-radius: 10px;
  padding-left: 5px;
`
const DeleteButton = styled.button`
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: red;
  font-weight: 600;
  color: #ffffff;
  border: none;
`
const AddButton = styled.button`
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background-color: #673AB7;
  font-weight: 600;
  color: #ffffff;
  border: none;
  padding: 5px;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/"

function App() {
  const [tasksList, setTasksList] = useState([])
  const { form, onChange, resetForm } = useForm({
    text: "",
    day: ""
  });
  
  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleApply = (e) => {
    e.preventDefault()
    const body = {
      text: form.text,
      day: form.day
    }

    axios.post(`${baseUrl}`, body)
    .then(() => {
      // alert(`Tarefa agendada com sucesso!`)
      getTasks()
      resetForm()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const deleteTask = (taskId) => {
    axios.delete(`${baseUrl}${taskId}`)
    .then(() => {
      // alert(`Tarefa deletada com sucesso!`)
      getTasks()
    }).catch(err => {
      console.log(err.message) 
    })
}

  useEffect(() => {
    getTasks()
}, [])

  const getTasks = () => {
    
    axios.get(`${baseUrl}`)
    .then(response => {
      setTasksList(response.data)
    }).catch(err => {
      console.log(err.message)
    })
  }

  let monday = tasksList.filter((tasks) => {
    return tasks.day === "Segunda-Feira";
  })

  let tuesday = tasksList.filter((tasks) => {
    return tasks.day === "Terça-Feira";
  })

  let wednesday = tasksList.filter((tasks) => {
    return tasks.day === "Quarta-Feira";
  })

  let thursday = tasksList.filter((tasks) => {
    return tasks.day === "Quinta-Feira";
  })

  let friday = tasksList.filter((tasks) => {
    return tasks.day === "Sexta-Feira";
  })

  let saturday  = tasksList.filter((tasks) => {
    return tasks.day === "Sábado";
  })

  let sunday = tasksList.filter((tasks) => {
    return tasks.day === "Domingo";
  })

  return (
    <PlannerContainer>
      <Header>LabePlanner</Header>
      <FormContainer>
        <form onSubmit={handleApply}>
          <label>Tarefa: </label>
          <Input
          type="text"
          placeholder="tarefa"
          name="text"
          value={form.text}
          onChange={handleInputChange}
          required
          >
          </Input>
          <label>Escolha o dia da semana: </label>
          <Select
            name="day"
            value={form.day}
            onChange={handleInputChange}
            required>
            <option value="">Nenhum</option>
            <option value="Segunda-Feira">Segunda-Feira</option>
            <option value="Terça-Feira">Terça-Feira</option>
            <option value="Quarta-Feira">Quarta-Feira</option>
            <option value="Quinta-Feira">Quinta-Feira</option>
            <option value="Sexta-Feira">Sexta-Feira</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </Select>
          <AddButton>Adicionar tarefa</AddButton>
        </form>
      </FormContainer>
      <PlannerDaysContainer>
        <DayOfWeekColumn>
          <WeekDayTitle>Segunda-Feira</WeekDayTitle>
                {monday.map(task => {
                  return <TaskLine key={task.id}><span>{task.text}</span><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
                })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <WeekDayTitle>Terça-Feira</WeekDayTitle>
          {tuesday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <WeekDayTitle>Quarta-Feira</WeekDayTitle>
          {wednesday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <WeekDayTitle>Quinta-Feira</WeekDayTitle>
          {thursday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <WeekDayTitle>Sexta-Feira</WeekDayTitle>
          {friday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <WeekDayTitle>Sábado</WeekDayTitle>
          {saturday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <WeekDayTitle>Domingo</WeekDayTitle>
          {sunday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><DeleteButton onClick={() => deleteTask(task.id)}>X</DeleteButton></TaskLine>
          })}
        </DayOfWeekColumn>
      </PlannerDaysContainer>
    </PlannerContainer>
  );
}

export default App;