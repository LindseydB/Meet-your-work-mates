import React from 'react';
import SearchedPerson from '../SearchedPerson/SearchedPerson';
import styles from './SearchedOutput.module.css';

const SearchOutput = (props) => {
    const searchArray = props.array.map((person, index) => {
        return (
            <SearchedPerson key={index}
                name={person.name}
                role={person.role}
                location={person.location}
                email={person.email} />
        );
    });

    return (
        <div className={styles.List}>
            {searchArray}
        </div>
    )
}

export default SearchOutput
