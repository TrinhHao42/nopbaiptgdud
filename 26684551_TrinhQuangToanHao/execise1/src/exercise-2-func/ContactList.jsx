import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {
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
