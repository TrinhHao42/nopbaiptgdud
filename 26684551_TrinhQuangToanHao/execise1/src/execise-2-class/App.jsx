import React, { Component } from 'react'
import ContactList from './ContactList'
import data from './data'
import '../app.css'

export default class App extends Component {
  render() {
    return (
      <ContactList ListContact = {data}/>
    )
  }
}
