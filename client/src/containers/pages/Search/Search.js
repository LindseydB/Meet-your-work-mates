import React, {useState} from 'react'
import "../../../bootstrap/css/bootstrap.min.css";
import AdvancedSearch from "../../../components/Search/AdvancedSearch/AdvancedSearch.js";
import SearchOutput from '../../../components/Search/SearchOutput/SearchOutput';
import axios from 'axios';

const Search = () => {
    const [advancedOptions, setAdvancedOptions] = useState(false);

    const advancedButton = () => setAdvancedOptions(!advancedOptions);

    const tempSearchArray = [
        {name: 'test1',
        role: 'dev',
        location: 'Wellington'},
        {name: 'test2',
        role: 'ba',
        location: 'Wellington'}
    ];

    const [searchArray, setSearchArray] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        setSearchArray(tempSearchArray);

        // const query = {
        //     keywords: e.target.elements.keywords.value
        // }

        // axios.post('https://api-dot-meet-work-mates.ts.r.appspot.com/meet_mates/add', query)
        //     .then(res => console.log(res.data));
        
        e.target.elements.keywords.value = "";

        if (advancedOptions === true) {
            advancedButton();
        }
    }

    return (
        <React.Fragment>
            <br />
            <h1>Find your fellow teammates</h1><br />
            <div>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <input type="text"
                            name="keywords"
                            placeholder="Input your search terms"
                            required
                            className="col-9" />
                        <button type="button" name="advanced button" className="col-3" onClick={advancedButton}>Advanced</button>
                    </div>
                    {advancedOptions === false ? null : <AdvancedSearch />} {/* need to add a margin here, not sure how */}
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
                <h2>Suggested teammates:</h2>
                <SearchOutput array={searchArray}/>
            </div>
        </React.Fragment>
    )
}

export default Search
