
import React, { useState } from 'react'
import { createContext } from 'react'
export const EnrollContext =createContext(); 
export const EnrollProvider = ({children}) => {
    const [enroll,setEnroll]=useState([]);
  return (
    <EnrollContext.Provider value={{enroll,setEnroll}}>{children}</EnrollContext.Provider>
  )
}

export default EnrollContext;