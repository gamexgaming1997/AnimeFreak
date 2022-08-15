import React from 'react';
// import { BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

import Landingpage from './components/Landingpage';

const App = () => {

  return (
    <div className='App col-lg-12 m-0 p-0'>
      <Landingpage />
    </div>
  )
}

export default App;