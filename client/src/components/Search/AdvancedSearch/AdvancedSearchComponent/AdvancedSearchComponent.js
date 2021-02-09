import React from 'react'

const AdvancedSearchComponent = (props) => {
    return (
        <select onChange={props.update} className="col-2" name={props.name}>
            <option value="" selected>{props.name}</option>
            <option value={props.option1}>{props.option1}</option>
            <option value={props.option2}>{props.option2}</option>
            <option value={props.option3}>{props.option3}</option>
        </select>
    )
}

export default AdvancedSearchComponent
