import React from 'react';
import './App.css';
import Navbar from './assets/Components/Navbar/Navbar';
import Footer from './assets/Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './assets/Context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
