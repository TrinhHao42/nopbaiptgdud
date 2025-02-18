import React, { Component } from 'react'
import Contact from './Contact'

export default class ContactList extends Component {
    render() {
        const {ListContact} = this.props
        return (
            <div>
                {
                    ListContact.map((contact) => {
                        return (
                            <Contact chidi = {contact}/>
                        )
                    })
                }
            </div>
        )
    }
}
