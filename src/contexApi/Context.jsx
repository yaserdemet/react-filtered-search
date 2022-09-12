import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const globalContext =createContext()
export const useGlobalContext = () => {
    return useContext(globalContext)
}


const Context = ({children}) => {
    const [search , setSearch] = useState("")
    const [dataa , setDataa] = useState()
  return (
    
    <globalContext.Provider value={{search , setSearch , dataa , setDataa}}>
        {children}
    </globalContext.Provider>

  )
}

export default Context