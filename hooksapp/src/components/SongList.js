import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SongForm from './SongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song 1', id: 1},
        { title: 'Song 2', id: 2},
        { title: 'Song 3', id: 3}
    ]);
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuidv4()}]);
    }
    return ( 
        <div>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>
            <SongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;