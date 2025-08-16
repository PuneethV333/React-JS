import React, { createContext } from 'react'
export const dataContext  = createContext() 


const userContext = ({children}) => {
  const username = "puneeth"
  return (
    <div>
      <dataContext.Provider value={username}>
          {children}
      </dataContext.Provider>
    </div>
  )
}

export default userContext
