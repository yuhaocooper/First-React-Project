import React, {useContext} from 'react'
import {Context} from './Context'

function Practice(){

  const {participants, setParticipants, count, setCount} = useContext(Context)

  const Increment = (count) => {setCount(count + 1)}
  const Decrement = (count) => {setCount(count -1)}

  function changeHandler(event){
    setParticipants(event.target.value)
  }

  return(
    <div>
      {count} - {participants}
      <br/>
      <button onClick={()=>Increment(count)}>Increment</button>
      <button onClick={()=>Decrement(count)}>Decrement</button>
      <br/>
      <input type='text' placeholder='Participant Name' value={participants} onChange={changeHandler} />
    </div>
  )
}


/*
class Practice extends Component {

  const {participants} = useContext(Context)

  state = {
    count: 0,
    name: 'yuhao',
    input: ''
  }

  Increment = () => {
    this.setState(prevState=> ({count: prevState.count + 1}))
  }

  Decrement = () => {
    this.setState(prevState => ({count: prevState.count -1}))
  }

  inputHandler = (event) => {
    this.setState({input: event.target.value})
    console.log(this.state.input)
  }

  submitName = (event) => {
    this.setState({name: this.state.input})
    console.log(this.state)
  }

  render() {
    return(
      <div>
        {this.state.count} - {participants}
        <br/>
        <button onClick={this.Increment}>Increase Count</button>
        <button onClick={this.Decrement} style={{margin:'10px'}}>Decrease Count</button>
        <br/>
        <input type='text' placeholder='placeholder text' value={this.state.input} onChange={this.inputHandler}/>
        <br/>
        <button onClick={this.submitName}>Submit Name</button>
      </div>
    )
  }
}
*/
export default Practice
