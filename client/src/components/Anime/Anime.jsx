import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// scss
import '../../scss/_Anime.scss';

const Anime = () => {

    //hooks
    const [page, setPage] = useState(1);
    const [list, setList] = useState();

    useEffect(()=>{
        const jikan_api = () => axios({
            method: 'get',
            url: `https://api.jikan.moe/v4/anime?page=${page}`,
            withCredentials: false,
            credentials: 'same-origin'
        }).then(val => setList(val.data))
        .catch(err => console.log(err));
        jikan_api();
    },[page]);

  return (
    <div className='Anime'>

        <section>
            <div className='animelistContainer'>
                {list?.data && Object.keys(list?.data).map(state => {
                    return (
                        <button className='animeBtn' key={list?.data[state].mal_id}>
                            <span className='text'>
                                {list?.data[state].title}
                            </span>
                        </button>
                    )
                })}
            </div>
        </section>
        <footer>
            <div className='footer'>
                <Stack spacing={2} className='stack'>
                    <Pagination count={1000} color="primary" className='pagination' onChange={(event, value)=> setPage(value)}/>
                </Stack>
            </div>
        </footer>

    </div>
  )
}

export default Anime;