import React, { useState } from 'react';
import axios from 'axios';
import { Routes as Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

// navbar component
import Navbar from './components/Navbar/Navbar';

// components
import Landingpage from './components/Landingpage/Landingpage';
import Anime from './components/Anime/Anime';

//hooks
import { useEffect } from 'react';

const App = () => {

  const [list, setList] = useState([]);

  useEffect(()=>{
    const data = () => axios({
      method: 'get',
      url: `https://api.jikan.moe/v4/anime?page=1`,
      withCredentials: false,
      credentials: 'same-origin'
    }).then(val => setList({...list, val}))
    .catch(err => console.log(err));
    data();
  },[])


  return (
    <div className='App col-lg-12 m-0 p-0'>
      <Switch>
        <Route path='/' element={<><Navbar/><Landingpage/></>}/>
        <Route path='/anime' element={<><Navbar/><Anime/></>}/>
      </Switch>
    </div>
  )
}

export default App;