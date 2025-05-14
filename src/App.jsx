import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import ListRoows from './Components/Roow/ListRoows/ListRoows'; // Make sure the path is correct

function App() {
  return (
    <div className='apps'>
      <Header />
      <Banner />
      <ListRoows />
      <Footer />
    </div>
  );
}

export default App;

