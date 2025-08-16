import React, { useContext } from 'react'
import { dataContext } from './context/userContext'

const App = () => {
  const data = useContext(dataContext)
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default App
