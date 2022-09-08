import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// redux
import { useDispatch } from 'react-redux';

// import action creator 
import { get_mal_id_from_API } from '../../controller/thunk.js';

// scss
import '../../scss/_SearchAnime.scss';

const SearchAnime = ({ title, setGet_Anime_ID, get_anime_id, setTitle }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anime, setAnime] = useState();

  useEffect(() => {
    const fetch = () => {
      axios({
        method: 'get',
        url: `https://api.jikan.moe/v4/anime?letter=${title}`,
        withCredentials: false,
        credentials: 'same-origin'
      }).then(res => setAnime(res.data.data))
        .catch(err => console.log('error:', err.response?.request.status))
    };
    fetch();
  }, [title])

  //anime.images.jpg.image_url/large_image_url/small_image_url

  const HandleSelectAnime = (e) => {
    e.preventDefault();
    if (get_anime_id) {
      dispatch(get_mal_id_from_API(get_anime_id))
      navigate(`/anime/view`)
    }
  }

  return (
    <div className='animeResultContainer'>
      <div className='innerContainer'>

        <div className='titleContainer'>
          <span className='text'>
            Result 0 - {anime?.length}
          </span>
        </div>

        <div className='animeList'>
          {anime && Object.keys(anime).map((state, key) => {
            return (
              <form onSubmit={HandleSelectAnime} >
                <div className='AnimeContainer' key={anime[state]?.mal_id}>
                  <div className='coverContainer' style={{ backgroundImage: `url(${anime[state]?.images.jpg.image_url})` }} />
                  <div className='detailsContainer'>
                    <div className='titleContainer'>
                      <button className='text'
                        type='submit'
                        onClick={() => {
                          setGet_Anime_ID(anime[state]?.mal_id)
                        }}>
                        {anime[state]?.title}
                      </button>
                    </div>
                    <div className='sypnosisContainer'>
                      <span className='text'>
                        Summary: &nbsp;
                        {anime[state]?.synopsis}
                      </span>
                    </div>
                  </div>
                  <div className='detailsContainer-2'>
                    <div className='labelContainer'>
                      <span className='text'>
                        Popularity
                      </span>
                    </div>
                    <div className='popularityContainer'>
                      <span className='text'>
                        {anime[state]?.popularity}
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default SearchAnime;