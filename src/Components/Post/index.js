import React from 'react'
import styles from './index.module.css'

const Post = ({ imageUrl, id }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} className={styles.image}/>
        </div>
    )
}

export default Post