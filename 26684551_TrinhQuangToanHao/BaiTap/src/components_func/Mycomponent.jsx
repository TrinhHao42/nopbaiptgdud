import React, { useEffect, useState } from 'react'
import AddUserInfor from '../components_func/AddUserInfor'
import DisplayInfor from '../components/DisplayInfor'

export default function Mycomponent() {
    const data = [
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
    ]
    
    const [listUser, setListUser] = useState(data)

    useEffect(() => {
        if(listUser.length === 0) alert("list user đã hết phần tử")
        if(listUser.length > 10) alert("list user không được vượt quá 10")  
    }, [listUser])


    const handleAddnewUser = (userObject) => {
        setListUser([userObject, ...listUser])
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = listUser
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setListUser(listUserClone)
    }

    const handleDeleteAll = () => {
        setListUser([])
    }
    return (
        <div>
            <AddUserInfor handleAddnewUser={handleAddnewUser} handleDeleteAll={handleDeleteAll}/>
            <br/>
            <DisplayInfor listUser={listUser} handleDeleteUser = {handleDeleteUser}/>
        </div>
    )
}
