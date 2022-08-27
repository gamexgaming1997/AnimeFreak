import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// scss
import '../../scss/_SearchAnime.scss';

const SearchAnime = ({ title }) => {

    const [anime, setAnime] = useState();

    useEffect(()=> {
        const fetch = () => {
            axios({
                method: 'get',
                url: `https://api.jikan.moe/v4/anime?letter=${title}`,
                withCredentials: false,
                credentials: 'same-origin'
            }).then(res => setAnime(res.data.data)).catch(err => console.log(err))
        };
        fetch();
    },[title])

    console.log(anime)

    //anime.images.jpg.image_url/large_image_url/small_image_url

  return (
    <div className='animeResultContainer'>
      <div className='innerContainer'>

        <div className='titleContainer'>
          <span className='text'>
            Result 0 - {anime?.length}
          </span>
        </div>

        <div className='animeList'>
          {anime && Object.keys(anime).map(state => {
            return (
              <div className='AnimeContainer' key={anime[state].mal_id}>
                <div className='coverContainer' style={{ backgroundImage: `url(${anime[state]?.images.jpg.image_url})` }}>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default SearchAnime;