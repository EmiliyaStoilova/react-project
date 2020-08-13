import React, { useContext } from 'react'
import styles from './index.module.css'
import UserContext from '../../Context'
import Button from '../Buttons'

const Post = ({ imageUrl, id }) => {
    const context = useContext(UserContext)
    const isLoggedIn = context.isLoggedIn

    return (
        <div className={styles.container}>
            <img src={imageUrl} className={styles.image}/><br/>
            {isLoggedIn ? (<a className={styles.link} href={`/details/${id}`}><Button title='Details' /></a>) : null}
        </div>
    )
}

export default Post