import React from 'react'

const Contact = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '5px', marginLeft: '20px' }}>
      <h2>{props.chidi.firstName}</h2>
      <h4>{props.chidi.lastName}</h4>
      <hr />
      <h4>phone: {props.chidi.phone}</h4>
      <hr />
      <h4>address: {props.chidi.address}</h4>
      <hr />
      <div style={{ textAlign: 'end' }}>
        <button onClick={() => props.handleDeleteData(props.chidi.id)}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Contact