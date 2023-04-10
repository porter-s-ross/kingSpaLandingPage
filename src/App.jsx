import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Welcome to My App!</h1>
      </header>
      <main>
        <p>This is the landing page for my React + Vite project.</p>
        <p>You can customize this page to fit your project's needs.</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
}

export default App;