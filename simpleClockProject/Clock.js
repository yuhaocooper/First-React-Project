/*
How does the clock work:
1. We used Hooks and intervals
2. We have a dummy State just to store value and update value so that we can make the interval run in useEffect
3. The default value of dateState can be anything but date. This is so that the first instance of setDateState will be different, thus causing the useEffect to run and re-render the whole component
4. useEffect runs after the component is rendered and it sets a new state with setDateState
5. With a new state, the whole component re-runs, returning a new Date-time with the initial variable of new Date()
6. Thus starting a continuous loop to keep updating the clock with the new date-time
7. This happens at whatever interval you want. It is currently set at '50' to minimize the lag of the clock. Ideally it should not be more than 1000ms.
8. The return function within useEffect is to close the interval when the component is dismounted so that it doesn't keep running in the background even when there is no need to since
none of the data will be displayed and used by the user anyway.
9. I've not used router and context in this simple demo.

*/

import React, {useState, useEffect} from 'react';
import App from './App'

function Clock() {
  var date = new Date()
  const [dateState, setDateState] = useState('hello')

  useEffect(() => {
    const interval = setInterval(() => {
        setDateState(date)
      },50);
      return () => clearInterval(interval)
  })

  return(
    <div>
     The time now is {date.toLocaleTimeString('en-US')}
    </div>
  )
}

export default Clock
