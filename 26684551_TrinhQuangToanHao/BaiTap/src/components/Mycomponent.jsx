import React, { Component } from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

export default class Mycomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listUser: [
                { id: 1, Name: "Dung", Age: 49 },
                { id: 2, Name: "Hoang", Age: 17 },
                { id: 3, Name: "Chien", Age: 32 },
            ]
        }
    }    

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID)
        this.setState({
            listUser: listUserClone
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
                <br />
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser = {this.handleDeleteUser}/>
            </div>
        );

    }
}
