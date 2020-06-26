import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider({children}){

  const [participants, setParticipants] = useState('Yuhao')
  const [count, setCount] = useState(0)

  return(
    <Context.Provider value={{participants, setParticipants, count, setCount}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider,Context}
