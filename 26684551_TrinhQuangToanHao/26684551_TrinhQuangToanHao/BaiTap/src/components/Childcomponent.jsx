import React, { Component } from 'react'

export default class Childcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = { valueInput: 'default value' }
  }

  handleInput = (event) => {
    this.setState({
      valueInput: event.target.value
    })
  }

  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }


  render() {
    return (
      <>
        <div>
          I just get from parent value:{this.props.myprop}

          call function sum: 6 + 7 = {this.props.sum(6, 7)}
        </div>
        <h3>---------------------------</h3>
        <div>
          <input value={this.props.valueInput} onChange={(event) => { this.handleInput(event) }} type="text" />
          <div>
            <span>{this.state.valueInput}</span>
          </div>
        </div>
        <h3>---------------------------</h3>
        <div>
          <form action=""
            onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type="text"
              value={this.state.Name}
              onChange={(event) => this.handleOnchangeInput(event)} />
            <button>Submit</button>
          </form>

        </div>
      </>
    )
  }
}
