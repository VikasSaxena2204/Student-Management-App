
import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.js'; // Import ThemeProvider and useTheme
import MyRouter from './router/index.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import './App.css';

// Component to manage content based on theme
const AppContent = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar />
            <MyRouter />
            <Footer />
        </div>
    );
};

// Main App Component
function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
