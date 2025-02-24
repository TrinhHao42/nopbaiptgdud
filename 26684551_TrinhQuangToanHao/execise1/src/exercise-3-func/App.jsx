import React, { useState } from 'react'
import data from './data'
import ContactList from './ContactList'
import '../app.css'

export default function App() {
  const [listData, setListData] = useState(data)

  const handleDeleteData = (data_id) => {
    const dataClone = listData.filter(item => item.id != data_id)
    setListData(dataClone)
  }

  const handleDeleteAllData = () => {
    setListData([])
  }

  return (
    <ContactList ListContact={listData} handleDeleteData={handleDeleteData} handleDeleteAllData={handleDeleteAllData}/>
  )
}
