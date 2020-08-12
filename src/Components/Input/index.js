import React from 'react';
import styles from './index.module.css'

const Input = ( { placeholder, title, id, value, onChange, type } ) => {
  return (
      <div className={ styles.container }>
            <label htmlFor={id}> { title } </label> <br />
            <input placeholder={placeholder} type={type || 'text'} id={ id } value={ value } onChange={ onChange } />
      </div>
  );
}

export default Input;
