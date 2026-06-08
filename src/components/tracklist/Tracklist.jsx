import React from 'react';
import './Tracklist.css';
import Track from '../track/Track.jsx';

function Tracklist({listResults, remove, onAddTrack, onRemoveTrack}) {
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components --> */}
      {listResults?.map(track =>

        <Track
          key = {track.id}
          track = {track}
          remove = {remove}
          onAddTrack = {onAddTrack}
          onRemoveTrack = {onRemoveTrack}

        />
      )}
    </div>
  )
}

export default Tracklist