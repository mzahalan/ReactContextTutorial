import {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function BookList() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>The Way of Kings</li>
                <li style={{ background: theme.ui }}>The Name of the Wind</li>
                <li style={{ background: theme.ui }}>The Final Empire</li>
            </ul>
        </div>
    )
}