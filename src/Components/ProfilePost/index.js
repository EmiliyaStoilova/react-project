import React from 'react'
import styles from './index.module.css'

const Post = ({ imageUrl, description, id, onClick }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} className={styles.image} />
            <p> {description} </p>
            <button className={styles.button} id={id} onClick={onClick} >Delete</button>
        </div>
    )
}

export default Post