import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

// navbar component
import Navbar from './components/Navbar/Navbar';

// components
import Landingpage from './components/Landingpage/Landingpage';

const App = () => {

  return (
    <div className='App col-lg-12 m-0 p-0'>
      <Switch>
        <Route path='/home' element={<><Navbar/><Landingpage/></>}/>
      </Switch>
    </div>
  )
}

export default App;