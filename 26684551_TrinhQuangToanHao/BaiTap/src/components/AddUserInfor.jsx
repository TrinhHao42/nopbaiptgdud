import React, { Component } from 'react'

export default class AddUserInfor extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddnewUser({
      id: Math.floor((Math.random() * 100) + 1) + "user",
      Name: this.state.Name,
      Age: this.state.Age
    })
  }

  handleUpdateName = (event) => {
    this.setState ({
        Name : event.target.value
    })
  }

  handleUpdateAge = (event) => {
    this.setState ({
        Age : event.target.value
    })
  }

  render() {
    return (
      <>
        <form action="" onSubmit={(event) => {this.handleOnSubmit(event)}}>
          Your name: <input type="text" onChange={(event) => this.handleUpdateName(event)}/>
          <br />
          Your age: <input type="text" onChange={(event) => this.handleUpdateAge(event)}/>
          <br />
          <button>Submit</button>
        </form>
      </>
    )
  }
}
