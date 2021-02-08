import React, {useState} from 'react'
import "../../../bootstrap/css/bootstrap.min.css";
import AdvancedSearch from "../../../components/AdvancedSearch/AdvancedSearch.js"

const Search = () => {
    const [advancedOptions, setAdvancedOptions] = useState(false);

    const advancedButton = () => setAdvancedOptions(!advancedOptions);

    const onSubmit = (e) => {
        e.preventDefault();
        
        e.target.elements.keywords.value = "";
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
            </div>
        </React.Fragment>
    )
}

export default Search
