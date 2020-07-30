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
  color: red;
`
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`
const PlannerDaysContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const TaskLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DayOfWeekColumn = styled.div`
  border: 1px solid red;
  min-width: 10vw;
  min-height: 70vh;
  text-align: center;
  margin: 4px;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-airton/"

function App() {
  const [tasksList, setTasksList] = useState([])
  const { form, onChange } = useForm({
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
          <input
          type="text"
          placeholder="tarefa"
          name="text"
          value={form.text}
          onChange={handleInputChange}
          required
          >
          </input>
          <label>Escolha o dia da semana: </label>
          <select
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
          </select>
          <button>Adicionar tarefa</button>
        </form>
      </FormContainer>
      <PlannerDaysContainer>
        <DayOfWeekColumn>
          <h4>Segunda-Feira</h4>
          {monday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <h4>Terça-Feira</h4>
          {tuesday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <h4>Quarta-Feira</h4>
          {wednesday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <h4>Quinta-Feira</h4>
          {thursday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <h4>Sexta-Feira</h4>
          {friday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <h4>Sábado</h4>
          {saturday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
        <DayOfWeekColumn>
          <h4>Domingo</h4>
          {sunday.map(task => {
            return <TaskLine key={task.id}><p>{task.text}</p><button onClick={() => deleteTask(task.id)}>X</button></TaskLine>
          })}
        </DayOfWeekColumn>
      </PlannerDaysContainer>
    </PlannerContainer>
  );
}

export default App;