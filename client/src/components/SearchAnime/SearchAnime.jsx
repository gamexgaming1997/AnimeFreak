import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

    console.log(anime);

  return (
    <div>

    </div>
  )
}

export default SearchAnime;