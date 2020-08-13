import React from 'react'
import styles from './index.module.css'

const PostDetails = ({ imageUrl, description, likes, isLiked, onClick }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} className={styles.image} />
            <p> {description} </p>
            <p> Likes: {likes} </p>
            <button className={isLiked ? styles.liked : styles.button } onClick={onClick} > Like </button>
        </div>
    )
}

export default PostDetails