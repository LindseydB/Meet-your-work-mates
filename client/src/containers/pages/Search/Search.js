import React, {useState} from 'react'
import "../../../bootstrap/css/bootstrap.min.css";
import AdvancedSearch from "../../../components/Search/AdvancedSearch/AdvancedSearch.js";
import SearchOutput from '../../../components/Search/SearchOutput/SearchOutput';
import axios from 'axios';

const Search = () => {
    const [advancedOptions, setAdvancedOptions] = useState(false);

    const advancedButton = () => setAdvancedOptions(!advancedOptions);

    const [selectedAdvancedOptions, setSelectedAdvancedOptions] = useState({});

    const updateSelectedAdvancedOptions = (e) => {
        let options = {...selectedAdvancedOptions}
        const changed = e.target.name;
        options[changed] = e.target.value;

        setSelectedAdvancedOptions(options);
    }

    const tempSearchArray = [
        {email: 'lowewalt@gmail.com',  
        name: 'test1',
        role: 'dev',
        location: 'Wellington'},
        {email: 'ddjmhatre@gmail.com', 
        name: 'test2',
        role: 'ba',
        location: 'Wellington'}
    ];


    const [searchArray, setSearchArray] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        //define variable to hold the keywords typed by the user
        const keywords = e.target.elements.keywords.value;

        //URL for live environment: https://api-dot-meet-work-mates.ts.r.appspot.com/meet_mates/search
        //simple request to search based on the content of the text box. Can replace the localhost reference with the URL above once server is deployed
        fetch("http://localhost:4000/meet_mates/search/"+keywords)
          .then(res => res.json())
          .then(
            (result) => {
              //set the search array within the state to contain the JSON result for displaying in the other components
              setSearchArray(result);
            },
            // NOTE: it's important to handle errors here
            // instead of a catch() block so that we don't accidentally catch
            // exceptions from bugs within the component
            (error) => {
              //log any errorts to the console
              console.log(error);
            }
          )

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
                    {advancedOptions === false ? null : <AdvancedSearch update={updateSelectedAdvancedOptions}/>} {/* need to add a margin here, not sure how */}
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
