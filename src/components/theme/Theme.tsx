import './Theme.css';
import React, { useContext, useState } from 'react';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = React.createContext(themes.light);

const Theme = () => {
    const theme = useContext(ThemeContext);
    const [mode, setMode] = useState(themes.light);
    const setTheme = () => {
        //@ts-ignore
        setMode((prev) => !prev);
    };

    return (
        <div className='block'>
            <div className={mode ? 'inner-block-moon' : 'inner-block-sun'} onClick={setTheme}>
                <div className='moon-background'><BsFillMoonFill className='moon' /></div>
                <div className='sun-background'><BsSunFill className='sun' /></div>
            </div>
        </div>
    )
}

export default Theme;