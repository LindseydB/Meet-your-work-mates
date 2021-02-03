import React from 'react'

const Search = () => {
    const onSubmit = () => {

    }

    return (
        <React.Fragment>
            <br />
            <h1>Find your fellow teammates</h1><br />
            <div className="form-group">
                <form method="Post" onSubmit={onSubmit}>
                    <input type="text"
                        name="keywords"
                        placeholder="Input your search terms"
                        required />
                </form>
            </div>
        </React.Fragment>
    )
}

export default Search
