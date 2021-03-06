import React, { Component } from 'react'
import PageLayout from '../../Components/PageLayout'
import styles from './index.module.css'
import Form from '../../Components/Form'
import Title from '../../Components/Title'
import Button from '../../Components/Buttons'
import Input from '../../Components/Input'
import userDb from '../../firebase/userDb'
import UserContext from '../../Context'

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            error: false
        }
    }

    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {
            email,
            password
        } = this.state

        userDb.login(email, password)
            .then(response => {
                userDb.setCookie()
                this.context.logIn()
                this.props.history.push('/')
            })
            .catch(e => this.setState({error: true}))
    }

    render() {

        const {
            email,
            password,
            error
        } = this.state

        return (
            <PageLayout>
                <Title title='Login' />
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <Input title='Email' id='email' value={email} onChange={(e) => this.onChange(e, 'email')} />
                    <Input type='password' title='Password' id='password' value={password} onChange={(e) => this.onChange(e, 'password')} />
                    {error ? (<p className={styles.error}>Try again</p>) : null}
                    <Button title='Login' />
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage;