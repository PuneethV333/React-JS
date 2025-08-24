import React, { useContext } from 'react'
import Header from './Componets/Header.jsx'
import DateCard from './Componets/DateCard.jsx'
import Body from './Componets/Body.jsx'
import Task from './Componets/Task.jsx'
import { ContextData } from './Context/Context.jsx'




const App = () => {
  const {task,setTask} = useContext(ContextData)
  return (
    <>
      <Header/>
      <DateCard/>      
      <Body data = {task} setData = {setTask}/>  
      <Task data = {task} setData = {setTask}/>    
    </>
  )
}

export default App
