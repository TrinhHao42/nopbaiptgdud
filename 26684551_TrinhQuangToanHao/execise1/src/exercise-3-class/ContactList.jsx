import React, { Component } from 'react'
import Contact from './Contact'

export default class ContactList extends Component {
    render() {
        const { ListContact } = this.props
        return (
            <>
                <div style={{ display: "flex" }}>
                    {
                        ListContact.map((contact) => {
                            return (
                                <Contact key={contact.id} chidi={contact} handleDeleteData={this.props.handleDeleteData} />
                            )
                        })
                    }
                </div>
                <button onClick={() => this.props.handleDeleteAllData()}
                    style={{ backgroundColor: 'red' }}
                >
                    Delelte All</button>
            </>
        )
    }
}
