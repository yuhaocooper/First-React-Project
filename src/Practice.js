import React, {Component} from "react"

class Practice extends Component {

  state = {
    count: 0,
    name: 'yuhao',
    input: ''
  }

  changeCount = () => {
    console.log(this.state)
    this.setState(prevState=> ({count: prevState.count + 1}))
  }

  inputHandler = (event) => {
    this.setState({input: event.target.value})
    console.log(this.state.input)
  }

  render() {
    return(
      <div>
        {this.state.count} - {this.state.name}
        <br/>
        <button onClick={this.changeCount}>Change Count</button>
        <br/>
        <input type='text' placeholder='placeholder text' value={this.state.input} onChange={this.inputHandler}/>
      </div>
    )
  }
}

export default Practice
