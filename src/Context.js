import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider({children}){

  const [participants, setParticipants] = useState('Yuhao')

  return(
    <Context.Provider value={{participants}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider,Context}
