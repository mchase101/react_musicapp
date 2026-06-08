import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchbar/SearchBar.jsx';
import SearchResults from '../components/searchresults/SearchResults.jsx';
import Playlist from '../components/playlist/Playlist.jsx';

function App() {

  // Manage the application's data (state hooks)
  // Once the component is mounted, represented by the []
  const [data, setData] = useState([]);                     //constant for us to search for track, album or artist
  const [searchResults, setSearchResults] = useState([]);   //constant store the search results
  const [playlistTracks, setPlayListTracks] = useState([]); // constant stores the playList of added tracks
  const [searchTerm, setSearchTerm] = useState("");         // constant stores the user searched term
  const [playListName, setPlaylistName] = useState("New Playlist");     // constant stores the title of the playlist
  const [saveStatus, setSaveStatus] = useState(false);


  // Preparing the data to be used by the application
  useEffect(() => {
    // Set the mock data
    setData([
      {
        id: 1,
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        uri: "spotify:track:0VjIjWp9m6pZpXpLup3mDs"
      },
      {
        id: 2,
        name: "Save Your Tears",
        artist: "The Weeknd",
        album: "After Hours",
        uri: "spotify:track:5Yy9m6pZpXpLup3mDs0VjI"
      },
      {
        id: 3,
        name: "Anti-Hero",
        artist: "Taylor Swift",
        album: "Midnights",
        uri: "spotify:track:0VjIjWp9m6pZpXpLup3mDs"
      },
      {
        id: 4,
        name: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989",
        uri: "spotify:track:39Yp9m6pZpXpLup3mDs0VjI"
      },
      {
        id: 5,
        name: "Cruel Summer",
        artist: "Taylor Swift",
        album: "Lover",
        uri: "spotify:track:1Bpv9m6pZpXpLup3mDs0VjI"
      },
      {
        id: 6,
        name: "Flowers",
        artist: "Miley Cyrus",
        album: "Endless Summer Vacation",
        uri: "spotify:track:0y9u89S9pE9pXpLup3mDs"
      },
      {
        id: 7,
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        uri: "spotify:track:4D76S8bWy3dY9pXpLup3mDs"
      },
      {
        id: 8,
        name: "Don't Start Now",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        uri: "spotify:track:6PjdY0CKqYf44v9pXpLup3"
      },
      {
        id: 9,
        name: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        uri: "spotify:track:0UweKu2_2eK3P3pXpLup3m"
      },
      {
        id: 10,
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        album: "Fine Line",
        uri: "spotify:track:4Zp9m6pZpXpLup3mDs0VjI"
      }
    ]);
  }, []);

  // Handle search requests
  function onSearchTerm(term) {
    // 1. find the search term against the data state hook
    // 2. Inject the results to searchResults state hook
    // 3. Search term: "Light" will be searched against each object (element) name, artist, album

    const lowerCaseTerm = term.toLowerCase();

    const results = data.filter(element =>
      String(element["name"]).toLowerCase().includes(lowerCaseTerm) ||
      String(element["artist"]).toLowerCase().includes(lowerCaseTerm) ||
      String(element["album"]).toLowerCase().includes(lowerCaseTerm)
    );

    if (!results.length || term === "")
      return setSearchResults([{
        id: 0,
        name: "No result found",
        artist: "__",
        album: "__",
        uri: "__"
      }]);
    /* return alert("No results found"); //TODO - update the results in a clearer format*/

    setSearchResults(results);

  }


  // Handle adding a track to playListTracks
  function onAddTrack(track) {
    /* alert(track.artist); */

    const foundTrack = playlistTracks.find(currentTrack => currentTrack.id === track.id);

    if (!foundTrack && track.name !== "No result found")
      setPlayListTracks([...playlistTracks, track]);
  }

// Handle removal of a track from playListTracks
  function onRemoveTrack(track){
    
    // set the condition that the same song cannot be added twice
    const foundTrack = playlistTracks.find(currentTrack => currentTrack.id === track.id);

    if(foundTrack)
      setPlayListTracks(playlistTracks.filter(currentTrack => currentTrack.id !== track.id));
  }

    // Save the playlist to local storage
  function onSavePlaylist(){

    const localStorage = window.localStorage;
    localStorage.setItem(playListName, JSON.stringify(playlistTracks));

    alert("Playlist has been saved to local storage.");

    // reset the inputs on the page itself
    setSearchTerm("");
    setSearchResults([]);
    setPlayListTracks([]);
    setPlaylistName("New Playlist");
    setSaveStatus(true);
  }
  
  
  
  
  
  console.log(playlistTracks);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchTerm={onSearchTerm}
          saveStatus = {saveStatus}
          setSaveStatus = {setSaveStatus}
        />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults
            searchResults={searchResults}
            onAddTrack={onAddTrack}
          />
          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistTracks={playlistTracks}
            onRemoveTrack={onRemoveTrack}
            playListName = {playListName}
            setPlaylistName = {setPlaylistName}
            onSavePlaylist = {onSavePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
