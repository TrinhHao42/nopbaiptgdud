import React, { Component } from 'react'
import ContactList from './ContactList'
import data from './data'
import '../app.css'

export default class App extends Component {
  state = {data}
  handleDeleteData = (data_id) => {
    const dataClone = this.state.data.filter(item => item.id != data_id)
    console.log(dataClone);
    console.log(this.state);
    
    this.setState({
      data: dataClone
    })
  }

  handleDeleteAllData = () => {
    this.setState({
      data: []
    })
  }
  render() {
    return (
      <ContactList ListContact={this.state.data} handleDeleteData={this.handleDeleteData} handleDeleteAllData={this.handleDeleteAllData}/>
    )
  }
}
