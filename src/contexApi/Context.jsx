import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const global = createContext()
export const useGlobal = useContext(global)


const Context = () => {
  return (
    <div>Context</div>
  )
}

export default Context