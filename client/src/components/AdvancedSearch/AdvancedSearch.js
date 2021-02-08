import React, {useState} from 'react'

const AdvancedSearch = () => {
    return (
        <div className="row">
            <select className="col-2" name="jobTitles">
                <option value="" selected>Job Titles</option>
                <option value="dev">Developer</option>
                <option value="ux">UX</option>
                <option value="ba">BA</option>
            </select>
            <select className="col-2" name="department">
                <option value="" selected>Department</option>
                <option value="dev">Developer</option>
                <option value="ux">UX</option>
                <option value="ba">BA</option>
            </select>
            <select className="col-2" name="location">
                <option value="" selected>Location</option>
                <option value="dev">Wellington</option>
                <option value="ux">Auckland</option>
                <option value="ba">Christchurch</option>
            </select>
            <select className="col-2" name="interests">
                <option value="" selected>Interests</option>
                <option value="dev">Hiking</option>
                <option value="ux">Rugby</option>
                <option value="ba">Soccer</option>
            </select>
            <select className="col-2" name="skills">
                <option value="" selected>Skills</option>
                <option value="dev">Problem solving</option>
                <option value="ux">Graphic design</option>
                <option value="ba">Time management</option>
            </select>
        </div>
    )
}

export default AdvancedSearch
