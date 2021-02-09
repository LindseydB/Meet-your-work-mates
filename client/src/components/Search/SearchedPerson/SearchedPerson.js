import React from 'react';
import styles from './SearchedPerson.module.css';

const SearchedPerson = (props) => {
    return (
        <div className={styles.Person}>
            <p>{props.name}</p>
            <p>{props.role}</p>
            <p>{props.location}</p>
        </div>
    )
}

export default SearchedPerson
