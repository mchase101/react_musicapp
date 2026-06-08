import React from 'react'
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({playlistTracks, onRemoveTrack, playListName, setPlaylistName, onSavePlaylist}) {

  function handlePlaylistName(event){
    setPlaylistName(event.target.value);
  }

  function handleSavePlaylist(){
    onSavePlaylist();
  }

  return (
    <div className="Playlist">
      <input onChange={handlePlaylistName} value={playListName}/>
     
     
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
       listResults={playlistTracks}
       remove={true}
      onRemoveTrack = {onRemoveTrack}
      />
       <button onClick={handleSavePlaylist} className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
