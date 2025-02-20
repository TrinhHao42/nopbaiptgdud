import React, { Component } from 'react'

export default class Contact extends Component {

    render() {
        return (
            <div style={{marginLeft : '200px', border: '1px solid white', padding : '3px'}}>
                <h2>{this.props.chidi.firstName}</h2>
                <h4>{this.props.chidi.lastName}</h4>
                <hr />
                <h4>phone: {this.props.chidi.phone}</h4>
                <hr />
                <h4>address: {this.props.chidi.address}</h4>
            </div>
        )
    }
}
