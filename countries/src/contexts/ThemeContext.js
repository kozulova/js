import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const [isLightTheme, setisLightTheme] = useState(false);
    

    const light = {
        text: 'hsl(200, 15%, 8%)',
        input: 'hsl(0, 0%, 52%)',
        background: 'hsl(0, 0%, 98%)',
        elements: 'hsl(0, 0%, 100%)'
    }
    const dark = {
        text: ' hsl(0, 0%, 100%)',
        input: 'hsl(209, 23%, 22%)',
        background: 'hsl(207, 26%, 17%)',
        elements: 'hsl(209, 23%, 22%)'
    }

    const toggleTheme = ()=>{
        setisLightTheme(!isLightTheme);
    }

    return (
        <div>
            <ThemeContext.Provider value={{isLightTheme: isLightTheme, light, dark, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
