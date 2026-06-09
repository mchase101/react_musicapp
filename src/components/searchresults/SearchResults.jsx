import React from 'react'
import Tracklist from '../tracklist/Tracklist'
import './SearchResults.css'

function SearchResults({searchResults, onAddTrack}) {
  
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Display the results in the form of a list */}
      <Tracklist
        listResults = {searchResults}
        remove = {false}
        onAddTrack = {onAddTrack}
      />
    </div>
  )
}

export default SearchResults