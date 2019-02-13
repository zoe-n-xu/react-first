import React from 'react';

const SearchBox = ({onSearchTextChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type="search" placeholder="search robos"
            onChange={onSearchTextChange} />
        </div>
    );
}

export default SearchBox;