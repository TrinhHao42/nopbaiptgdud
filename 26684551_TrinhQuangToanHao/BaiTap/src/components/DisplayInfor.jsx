import React, { Component } from 'react'

export default class DisplayInfor extends Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                            <div>User name is: {user.Name}</div>
                            <div>User Age: {user.Age}</div>
                            <button onClick={() => {
                                this.props.handleDeleteUser(user.id)
                            }}>Delete</button>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
