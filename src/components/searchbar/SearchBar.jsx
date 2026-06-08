import React from 'react'
import "./SearchBar.css"
function SearchBar({searchTerm, 
                    setSearchTerm, 
                    onSearchTerm, 
                    saveStatus,
                  setSaveStatus
                }) {

  function handleSearchTerm(event){
    setSearchTerm(event.target.value);
    setSaveStatus(false);

  }

  function handleOnSearchTerm(){
    onSearchTerm(searchTerm);
  }

  return (
    <div className="SearchBar">
      <input onChange={handleSearchTerm} placeholder="Enter A Song, Album, or Artist" value={searchTerm} />
      <button onClick={(handleOnSearchTerm)} className="SearchButton">SEARCH</button>

      {(saveStatus) && <h3> Your Playlist has been saved!</h3>}


    </div>
  )
}

export default SearchBar