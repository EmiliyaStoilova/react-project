import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import Link from '../Link'
import styles from './index.module.css'
import UserContext from '../../Context'
import userDb from '../../firebase/userDb'

class Header extends Component {

    static contextType = UserContext

    logOut = () => {
        userDb.logout()
            .then(response => {
                document.cookie = 'auth-user=; Max-Age=0';
                this.context.logOut()
                this.props.history.push('/')
            })
            .catch(e => console.log(e))
    }

    render() {

        const isLoggedIn = this.context.isLoggedIn
        const profile = `/profile/${userDb.getUser()}`

        if (isLoggedIn) {
            return (
                <header className={styles.navigation}>
                    <Link title='home' href='/' />
                    <Link title='profile' href={profile} />
                    <Link title='create' href='/create' />
                    <span className={styles.span} onClick={this.logOut}>logout </span>
                </header>
            )
        } else {
            return (
                <header className={styles.navigation}>
                    <Link title='home' href='/' />
                    <Link title='login' href='/login' />
                    <Link title='register' href='/register' />
                </header>
            )
        }

    }
}

export default withRouter(Header)