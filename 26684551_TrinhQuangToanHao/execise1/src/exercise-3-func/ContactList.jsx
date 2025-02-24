import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {
    const { ListContact } = props
    return (
        <div style={{ width: '100vw', height: '100%', display: 'flex', justifyContent: 'center' }}>
            <div>
                <div style={{ display: "flex" }}>
                    {
                        ListContact.map((contact) => {
                            return (
                                <Contact key={contact.id} chidi={contact} handleDeleteData={props.handleDeleteData} />
                            )
                        })
                    }
                </div>
                <div style={{ textAlign: 'end' }}>
                    <button onClick={() => props.handleDeleteAllData()}
                        style={{ backgroundColor: 'red', marginTop: '20px', color: 'white' }}
                    >
                        Delelte All</button>
                </div>
            </div>
        </div>
    )
}
