import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// redux 
import { useDispatch } from 'react-redux';

// action creator 
import { get_mal_id_from_API } from '../../controller/thunk.js';

// scss
import '../../scss/_Anime.scss';

const Anime = ({ setGet_Anime_ID, get_anime_id }) => {

    // call action using dispatch
    const dispatch = useDispatch();

    // navigate
    const navigate = useNavigate();

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

    const HandleSubmit = (e) => {
        e.preventDefault();
        if(get_anime_id){
            dispatch(get_mal_id_from_API(get_anime_id))
            navigate(`/anime/view`)
        }
    }

  return (
    <div className='Anime'>
        <section>
            <form onSubmit={HandleSubmit}>
            <div className='animelistContainer'>
                {list?.data && Object.keys(list?.data).map(state => {
                    return (
                        <button className='animeBtn' key={list?.data[state].mal_id}
                        type='submit'
                        onClick={()=> {
                            setGet_Anime_ID(list?.data[state]?.mal_id)
                        }}
                        >
                            <span className='text'>
                                {list?.data[state].title}
                            </span>
                        </button>
                    )
                })}
            </div>
            </form>
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