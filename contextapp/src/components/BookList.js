import {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

export default function BookList() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);

    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
            <ul>
                {books.map(book => (
                    <li style={{ background: theme.ui }} key={book.key}>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}