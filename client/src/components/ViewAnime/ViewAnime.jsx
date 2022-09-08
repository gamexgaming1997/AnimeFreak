import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

//scss
import '../../scss/_ViewAnime.scss';

// import action creator 
import { get_mal_id_from_API } from '../../controller/thunk.js';

const ViewAnime = ({ get_anime_id }) => {

  //call action for action creator 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const selected_anime = useSelector(state => get_anime_id ? state.reducer.AnimeListContainer?.data : null);

  const [recommended, setRecommended] = useState();
  const [selectedTop, setSelectedTop] = useState();
  const [topAnimes, setTopAnimes] = useState([]);
  const [selectedRecommendedAnime, SetSelectedRecommendedAnime] = useState('');

  useEffect(() => {
    const find = () => {
      axios({
        method: 'get',
        url: `https://api.jikan.moe/v4/anime/${selected_anime?.mal_id}/recommendations`,
        withCredentials: false,
        credentials: 'same-origin'
      }).then(val => setRecommended(selected_anime.mal_id ? val.data.data : null))
        .catch(err => console.log(err))
    }
    if (selected_anime?.mal_id) find();
  }, [selected_anime?.mal_id]);

  useEffect(() => {
    const fetch = async () => {
      axios({
        method: 'get',
        url: `https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&page=1&limit=25`,
        withCredentials: false,
        credentials: 'same-origin'
      }).then(res => setTopAnimes(res.data.data))
        .catch(err => console.log(err));
    }
    fetch();
  }, [])

  const HandleSelected_Recommended = (e) => {
    e.preventDefault();
    if (selectedRecommendedAnime) {
      dispatch(get_mal_id_from_API(selectedRecommendedAnime))
      navigate(`/anime/view`)
    }
  }

  const HandleSelected_TopAnime = (e) => {
    e.preventDefault();
    if (selectedTop) {
      dispatch(get_mal_id_from_API(selectedTop))
      navigate('/anime/view')
    }
  }

  return (
    <div>
      {selected_anime &&
        <div className='CONTAINER'>
          <div className='anime'>
            {/* container 1 */}
            <div className='innerContainer-1'>
              <div className='detailsContainer'>

                {/* label here */}
                <div className='titleContainer'>
                  <span className='text'>
                    {selected_anime?.title}
                  </span>
                </div>

                {/* details */}
                <div className='details'>
                  <div className='title'>
                    <span className='text'>
                      {selected_anime?.title}
                    </span>
                  </div>
                  <div className='summary'>
                    <span className='text'>
                      {selected_anime?.synopsis}
                    </span>
                  </div>
                  <div className='othertitle'>
                    <span className='text'>
                      Other titles: <span className='innerText'>{selected_anime?.title_english},{selected_anime?.title_japanese}</span>
                    </span>
                  </div>
                  <div className='genre'>
                    <span className='text'>
                      Genre: <span className='innerText'>{selected_anime?.genres.map(state => state.name)}</span>
                    </span>
                  </div>
                  <div className='episodes'>
                    <span className='text'>
                      Episodes: <span className='innerText'>{selected_anime?.episodes}</span>
                    </span>
                  </div>
                  <div className='status'>
                    <span className='text'>
                      Status: <span className='innerText'>{selected_anime?.status}</span>
                    </span>
                  </div>
                </div>

              </div>
              <div className='suggestionContainer'>

                {/* label here */}
                <div className='titleContainer'>
                  <span className='text'>
                    Popular animes
                  </span>
                </div>

                <div className='popularanimelistContainer'>
                  {topAnimes && Object.keys(topAnimes).map(state => {
                    return (
                      <form onSubmit={HandleSelected_TopAnime} key={topAnimes[state].mal_id}>
                        <button className='animesNames'
                          onClick={() => {
                            setSelectedTop(topAnimes[state].mal_id)
                          }}
                          type='submit'
                        >
                          <span className='text'>
                            {topAnimes[state].title}
                          </span>
                        </button>
                      </form>
                    )
                  })}
                </div>

              </div>
            </div>
            {/* container 2 */}
            <div className='innerContainer-2'>

              <div className='coverContainer'>

                {/* label here */}
                <div className='titleContainer'>
                  <span className='text'>
                    Cover
                  </span>
                </div>

                {/* cover */}
                <div className='cover' style={{ backgroundImage: `url(${selected_anime?.images.jpg.large_image_url})` }} />

              </div>

              <div className='relatedAnimeContainer'>

                {/* label here */}
                <div className='titleContainer'>
                  <span span className='text'>
                    Related Anime
                  </span>
                </div>

                {/* recommended animelist */}
                <div className='suggestionslistContainer'>
                  {recommended && recommended.map(state => {
                    return (
                      <form onSubmit={HandleSelected_Recommended} key={state?.entry.mal_id}>
                        <button className='animeTitleBtn'
                          onClick={() => {
                            SetSelectedRecommendedAnime(state?.entry.mal_id)
                          }}
                          type='submit'
                        >
                          <span className='text'>
                            {state?.entry.title}
                          </span>
                        </button>
                      </form>
                    )
                  })}
                </div>

              </div>

            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ViewAnime;