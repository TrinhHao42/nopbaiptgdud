import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {
    const { ListContact } = props
    return (
        <>
            <div style={{ display: "flex" }}>
                {
                    ListContact.map((contact) => {
                        return (
                            <Contact key={contact.id} chidi={contact} handleDeleteData={props.handleDeleteData} />
                        )
                    })
                }
            </div>
            <button onClick={() => props.handleDeleteAllData()}
                style={{ backgroundColor: 'red' }}
            >
                Delelte All</button>
        </>
    )
}
