import React from 'react'
import styles from './index.module.css'
import image from '../../images/1469942-200.png'

const Error = () => {
    return (
        <div className={styles.container}>
            <img src={image} />
            <p>
                This page doesn't exist
            </p>
        </div>
    )
}

export default Error