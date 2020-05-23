import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // short circuit operator
        return this.state.isLoggedIn && <div>Welcome Vishvas</div>
        //approach --3

        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Vishvas</div> :
        //         <div>Welcome Guest</div>
        // )
        //approach--2

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishvas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //approach--1

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Vishvas</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

    }
}

export default UserGreeting
