import { useState } from 'react'
import './App.css'
// import './index.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Welcome to King Spa & Sauna!</h1>
      </header>
      <main>
        <p>This is the landing page for my React + Vite project.</p>
        <p>You can customize this page to fit your project's needs.</p>
      </main>
      <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
}

export default App;