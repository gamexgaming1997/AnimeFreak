import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

//scss
import '../../scss/_ViewAnime.scss';

const ViewAnime = ({ get_anime_id }) => {

    const navigate = useNavigate();

    const selected_anime = useSelector(state => get_anime_id ? state.reducer.AnimeListContainer?.data : null);

    const [recommended, setRecommended] = useState();

    useEffect(()=> {
      const find = () => {
        axios({ 
            method: 'get',
            url: `https://api.jikan.moe/v4/anime/${selected_anime?.mal_id}/recommendations`,
            withCredentials: false,
            credentials: 'same-origin'
        }).then(val => setRecommended(selected_anime.mal_id ? val.data.data : null))
        .catch(err => console.log(err))
      }
      if(selected_anime?.mal_id) find();
    },[selected_anime?.mal_id]);

    // console.log(recommended);

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
                  <div className='cover' style={{ backgroundImage: `url(${selected_anime?.images.jpg.large_image_url})` }}/>
      
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
                    {recommended?.entry && Object.keys(recommended?.entry).map(val => {
                      console.log(recommended?.entry[val].mal_id)
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