import React from 'react'
import ContactList from '../exercise-2-func/ContactList'
import data from '../exercise-2-func/data'
import '../app.css'

const App = () => {
  return (
    <ContactList ListContact = {data}/>
  )
}

export default App