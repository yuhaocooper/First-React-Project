import React, {useContext} from 'react'
import {Context} from './Context'

function Home(){

  const {participants} = useContext(Context)

  return(
    <div>
    <h1>Home Page</h1>
    <p>The participants are: {participants}</p>
    </div>
  )
}

export default Home
