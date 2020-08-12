import React, { Component } from 'react'
import UserContext from './Context'

class Auth extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    logIn = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    componentDidMount() {
        const token = (document.cookie).split('=')[1]

        if(!token) {
            this.logOut()
            return
        }

        this.logIn()
    }

    render() {
        const {
            isLoggedIn
        } = this.state

        return (
            <UserContext.Provider value={{
                isLoggedIn,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default Auth