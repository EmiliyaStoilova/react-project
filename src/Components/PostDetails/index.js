import React from 'react'
import styles from './index.module.css'

const PostDetails = ({ imageUrl, description, likes, isLiked, onClick }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} className={styles.image} />
            <p> {description} </p>
            <p> Likes: {likes} </p>
            {isLiked ? (<p>You already liked</p>) : (<button className={ styles.button } onClick={onClick} > Like </button>)}
            
        </div>
    )
}

export default PostDetails