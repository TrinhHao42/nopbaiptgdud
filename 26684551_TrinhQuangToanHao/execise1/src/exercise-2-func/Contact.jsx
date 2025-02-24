import React from 'react'

export default function Contact(props) {
  return (
    <div style={{ border: '1px solid white', padding: '3px', marginLeft: '20px' }}>
      <h2>{props.chidi.firstName}</h2>
      <h4>{props.chidi.lastName}</h4>
      <hr />
      <h4>phone: {props.chidi.phone}</h4>
      <hr />
      <h4>address: {props.chidi.address}</h4>
    </div>
  )
}
