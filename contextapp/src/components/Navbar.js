import React, {Component} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {

    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                const { isAuthenticated, toggleAuth } = authContext;  // This destructuring could have been done above.
                return (
                    <ThemeContext.Consumer>
                        {({ isLightTheme, light, dark }) => {
                            const theme = isLightTheme ? light : dark;
                            return (
                                <nav style={{ background: theme.ui, color: theme.text }}>
                                    <h1>Context App</h1>
                                    <div onClick={toggleAuth}>
                                        {isAuthenticated ? 'Logged In' : 'Logged Out'}
                                    </div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            )
                        }}
                    </ThemeContext.Consumer>
                )
            }
        }</AuthContext.Consumer>
        );
    }
}
 
export default Navbar;