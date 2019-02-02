import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input type="text" name="movieSearch" id="movieSearch"/>
        <input type="submit" value="search" onClick={(e) => { e.persist(); props.searchTest(e); }} />
      </form>
    </div>
  )
}

export default SearchBar;