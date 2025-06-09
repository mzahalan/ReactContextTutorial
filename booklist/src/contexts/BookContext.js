import { createContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext()

const STORAGE_KEY = 'booklist';

export default function BookContextProvider(props) {

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const bookString = localStorage.getItem(STORAGE_KEY)
    return bookString ? JSON.parse(bookString) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}
