import React from 'react'
import Contact from './Contact'

const ContactList = (props) => {
    const { ListContact } = props
    return (
        <div style={{ display: "flex" }}>
            {
                ListContact.map((contact) => {
                    return (
                        <Contact chidi={contact} />
                    )
                })
            }
        </div>
    )
}

export default ContactList