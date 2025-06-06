import { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


export default function NavBar() {
    const {books} = useContext(BookContext);

  return (
    <div className="navbar">
        <h1>Book List</h1>
        <p>Currently {books.length} books to read</p>
    </div>
  )
}
