import { useState } from 'react';
const lightTheme = {
    background: '#ffffff', // white
    text: '#000000' // black
};

const darkTheme = {
    background: '#000000', // black
    text: '#ffffff' // white
};
const ThemeSetter = () => {

    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    } 
    return (
        <div style={{ background: theme.background, color: theme.text }}>
            <button onClick={toggleTheme}>Cambia Theme</button>
            <p>Prueba de texto </p>
        </div>
    )

}

export default ThemeSetter;