import React from 'react';
import SearchedPerson from '../SearchedPerson/SearchedPerson';
import styles from './SearchedOutput.module.css';

//NOTE: role and location aren't currently setup within the database.
//Need to update the Schema to include these if you want to displahy them.
//In the meantime, I have used per.son.email and person.mobile so that data can be displayed in results

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
