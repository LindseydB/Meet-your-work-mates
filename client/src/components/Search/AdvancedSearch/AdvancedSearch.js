import React from 'react';
import AdvancedSearchComponent from './AdvancedSearchComponent/AdvancedSearchComponent';

const AdvancedSearch = (props) => {
    const valuesList = [
        {name: "Job Title",
        option1: "Dev",
        option2: "UX",
        option3: "BA"},
        {name: "Department",
        option1: "Dev",
        option2: "UX",
        option3: "BA"},
        {name: "Location",
        option1: "Wellington",
        option2: "Auckland",
        option3: "Christchurch"},
        {name: "Interests",
        option1: "Hiking",
        option2: "Rugby",
        option3: "Soccer"},
        {name: "Skills",
        option1: "Problem Solving",
        option2: "Graphic Design",
        option3: "Time Management"}
    ]

    const componentList = valuesList.map(list => {
        return (<AdvancedSearchComponent update={props.update}
            name={list.name} 
            option1={list.option1} 
            option2={list.option2} 
            option3={list.option3} />
        );
    });

    return (
        <div className="row">
            {componentList}
        </div>
    )
}

export default AdvancedSearch
