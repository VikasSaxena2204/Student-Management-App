
import React from 'react';
import { useTheme } from '../context/ThemeContext.js';

const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: isDarkMode ? '#333' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    };

    return (
        <button onClick={toggleTheme} style={buttonStyle} aria-label={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeSwitcher;
