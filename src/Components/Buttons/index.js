import React from 'react'
import styles from './index.module.css'

const SubmitButton = ( { title } ) => {
    return (
        <button type='submit' className={ styles.button } > { title } </button>
    )
}

export default SubmitButton