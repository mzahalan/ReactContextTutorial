import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext()

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title: 'The Way of Kings', author: 'Brandon Sanderson', id: 1},
        {title: 'The Name of the Wind',  author: 'Brandon Sanderson', id: 2},
        {title: 'The Final Empire',  author: 'Brandon Sanderson', id: 3},
        {title: 'The Hero of Ages',  author: 'Brandon Sanderson', id: 4}
    ])

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv4()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
        {props.children}
    </BookContext.Provider>
  )
}
