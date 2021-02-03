import React from 'react'

const Search = () => {
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
                    <div className="form-group">
                        <input type="text"
                            name="keywords"
                            placeholder="Input your search terms"
                            required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Search
