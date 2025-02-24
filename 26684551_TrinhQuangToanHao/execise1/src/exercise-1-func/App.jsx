import React from 'react'
import Contact from './Contact'

export default function App() {
  const chidi = {
    firstName : "Trinh",
    lastName : "Hao",
    phone : "0000000000",
    address : "pdfdsfsdfd"
  }
  
  return (
    <div>
      <Contact chidi = {chidi}/>
    </div>
  )
}
