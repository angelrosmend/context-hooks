import React from 'react';
import Navbar from './components/Navbar';
import './index.css'
import BookList from './components/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';


//AppRouter
function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
     <Navbar />
     <BookList />
    <ThemeToggle />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
