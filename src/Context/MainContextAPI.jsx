import React from 'react'
import { createContext,useState } from 'react'
export const  mainContext=createContext() // A data walewarehouse used to save the data.
export const MainContextAPI = ({children}) => {
    
    const [allExpence, setAllExpense] = useState(JSON.parse(localStorage.getItem("expence")||'[]'))

  return (
     <mainContext.Provider value={{allExpence,setAllExpense}}>{children}</mainContext.Provider>
  )
}

