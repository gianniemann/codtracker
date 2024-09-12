import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Slideshow from './components/slideshow';

function App() {
  return <React.Fragment> 
    <h1>COD WEBSHOP</h1>
    <Navbar/>
    <Slideshow/>
    </React.Fragment>
  ;
}

export default App;