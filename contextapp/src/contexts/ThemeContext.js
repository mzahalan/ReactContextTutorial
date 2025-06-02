import React, {createContext, Component} from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        dark: {
            text: '#ddd',
            ui: '#333',
            bg: '#555'
        },
        light: {
            text: '#555',
            ui: '#ddd',
            bg: '#eee'
        }
     } 
     toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
     }
     
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;