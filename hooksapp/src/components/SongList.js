import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SongForm from './SongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song 1', id: 1},
        { title: 'Song 2', id: 2},
        { title: 'Song 3', id: 3}
    ]);
    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuidv4()}]);
    }
    useEffect(() => {
        console.log('use effect hook ran', songs);
    },[songs]);
    useEffect(() => {
        console.log('use effect hook ran', age);
    },[age]);
    return ( 
        <div>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>
            <SongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;