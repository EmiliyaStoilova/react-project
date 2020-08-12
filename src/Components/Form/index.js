import React from 'react';
import styles from './index.module.css'

function Form(props, { onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
        {props.children}
    </form>
  );
}

export default Form;