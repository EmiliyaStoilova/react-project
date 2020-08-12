import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../Components/PageLayout'
import Form from '../../Components/Form'
import Title from '../../Components/Title'
import Button from '../../Components/Buttons'
import Input from '../../Components/Input'
import userDb from '../../firebase/userDb'
import UserContext from '../../Context'

class RegisterPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            rePassword: ''
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
            password,
            rePassword
        } = this.state

        if(password === rePassword) {
            userDb.register(email, password)
            .then(response => {
                userDb.setCookie()
                this.context.logIn()
                localStorage.setItem('userId', response.user.uid);
                this.props.history.push('/')
            })
            .catch(e => console.log(e))
        }
    }

    render() {

        const {
            email,
            password,
            rePassword
        } = this.state

        return (
            <PageLayout>
                <Title title='Register' />
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <Input title='Email' id='email' value={email} onChange={(e) => this.onChange(e, 'email')} />
                    <Input title='Password' id='password' value={password} onChange={(e) => this.onChange(e, 'password')} />
                    <Input title='Repeat Password' id='rePassword' value={rePassword} onChange={(e) => this.onChange(e, 'rePassword')} />
                    <Button title='Register' />
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage;