import React, { useState } from 'react'

const SongForm = ({addSong}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        addSong(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name:</label>
            <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)} /><br/>
            <input type="submit" value="add song" />
        </form>
    )
}

export default SongForm;