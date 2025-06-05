import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song 1', id: 1},
        { title: 'Song 2', id: 2},
        { title: 'Song 3', id: 3}
    ]);
    const addSong = () => {
        setSongs([...songs, {title: 'New Song', id: uuidv4()}]);
    }
    return ( 
        <div>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>
            <button onClick={addSong}>Add Song</button>
        </div>
     );
}
 
export default SongList;