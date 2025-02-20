import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div style={{ border: '1px solid white', padding: '3px', marginLeft: '20px' }}>
        <h2>{this.props.chidi.firstName}</h2>
        <h4>{this.props.chidi.lastName}</h4>
        <hr />
        <h4>phone: {this.props.chidi.phone}</h4>
        <hr />
        <h4>address: {this.props.chidi.address}</h4>
        <hr />
        <button onClick={() => this.props.handleDeleteData(this.props.chidi.id)}
          style={{backgroundColor:'red'}}
        >
          Delete
        </button>
      </div>
    )
  }
}
