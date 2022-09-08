import React from 'react';
import axios from 'axios';
import { Routes as Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

// navbar component
import Navbar from './components/Navbar/Navbar';

// components
import Top from './components/Top/Top';
import Landingpage from './components/Landingpage/Landingpage';
import Anime from './components/Anime/Anime';
import ViewAnime from './components/ViewAnime/ViewAnime';
import SearchAnime from './components/SearchAnime/SearchAnime';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

//hooks
import { useEffect, useState } from 'react';

const App = () => {

  const [list, setList] = useState([]);

  // get selected anime --- mal_id
  const [get_anime_id, setGet_Anime_ID] = useState();

  // get searched anime by title
  const [title, setTitle] = useState('');

  useEffect(() => {
    const data = () => axios({
      method: 'get',
      url: `https://api.jikan.moe/v4/anime?page=1`,
      withCredentials: false,
      credentials: 'same-origin'
    }).then(val => setList({ ...list, val }))
      .catch(err => console.log(err));
    data();
  });

  return (
    <div className='App col-lg-12 m-0 p-0'>
      <div className='encapsulate'>
        <Switch>
          <Route path='/' element={<><Top title={title} setTitle={setTitle} /><Navbar setTitle={setTitle} /><Landingpage setGet_Anime_ID={setGet_Anime_ID} get_anime_id={get_anime_id} /><Footer /></>} />
          <Route path='/anime' element={<><Top title={title} setTitle={setTitle} /><Navbar setTitle={setTitle} /><Anime setGet_Anime_ID={setGet_Anime_ID} get_anime_id={get_anime_id} /><Footer /></>} />
          <Route path={get_anime_id ? `/anime/view` : `/`} element={<><Top title={title} setTitle={setTitle} /><Navbar setTitle={setTitle} /><ViewAnime get_anime_id={get_anime_id} /><Footer /></>} />
          <Route path='/search/anime' element={<><Top title={title} setTitle={setTitle} /><Navbar setTitle={setTitle} /><SearchAnime title={title} setGet_Anime_ID={setGet_Anime_ID} get_anime_id={get_anime_id} setTitle={setTitle} /><Footer /></>} />
          <Route path='/About' element={<><Top title={title} setTitle={setTitle} /><Navbar setTitle={setTitle} /><About /><Footer /></>} />
        </Switch>
      </div>
    </div>
  )
}

export default App;