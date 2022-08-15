import React from 'react';
import axios from 'axios';
import { FaSearch, FaAngleDoubleDown } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

// scss
import '../../scss/Landingpage.scss';


const Landingpage = () => {

  // hooks
  const [textSearch, setTextSearch] = useState('');
  const [topAnime, setTopAnime] = useState([]);
  const [topAnimeRemoveOne, setTopAnimeRemoveOne] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [limitIncrement, setLimitIncrement] = useState(10);

  //ref
  const AnimeImg = useRef(null);

  useEffect(()=>{
    const fetch = async () => {
      axios({
        method: 'get',
        url: `https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&page=1&limit=10`,
        withCredentials: false,
        credentials: 'same-origin'
      }).then(res => setTopAnime(res.data.data))
      .catch(err => console.log(err));
    }
    fetch();
  },[])

  console.log(topAnime)

  useEffect(()=>{
    if(topAnime[0]){
      AnimeImg.current.style.backgroundImage = `url(${topAnime[0].images.jpg.large_image_url})`;
    }
  },[topAnime[0]])

  useEffect(()=>{
    const second_fetch = async () => {
      axios({
        method: 'get',
        url: `https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&page=1&limit=${limitIncrement}`,
        withCredentials: false,
        credentials: 'same-origin'
      }).then(res => setTopAnimeRemoveOne(res.data.data))
      .catch(err => console.log(err));
    }
    second_fetch();
  },[limitIncrement])

  console.log(topAnimeRemoveOne)

  // title,title_english,title_japanese,rating,mal_id,popularity,aired,
  // episodes,genres,score,status,sypnosis,title_synonyms,year 

  return (
    <div className='Landingpage col-lg-12'>

        {/* list */}
        <section>
          <div className='animeFormContainer'>

              <div className='titleContainer'>
                  <span className='text'>
                      Top Anime
                  </span>
              </div>

              <div className='TopAnimeContainer'>
                {/* top 1 Anime*/}
                <div className='topAnime'>
                  <div className='imgContainer' ref={AnimeImg} />
                  <div className='detailsContainer'>
                    <div className='titleContainer'>
                      <button className='text'>
                        {topAnime[0] ? topAnime[0]?.title : ''}
                      </button>
                    </div>
                    <div className='alterTitleContainer'>
                      <span className='text'>
                        Other title:  {topAnime[0] ? topAnime[0]?.title_english : ''},{topAnime ? topAnime[0]?.title_japanese : ''}
                      </span>
                    </div>
                    <div className='sypnosisContainer'>
                      <span className='text'>
                        {topAnime[0] ? topAnime[0]?.synopsis : ''}
                      </span>
                    </div>
                    <div className='genreContainer'>
                      <span className='text'>
                        Genres: {topAnime[0] ? topAnime[0]?.genres[0].name : ''},{topAnime[0] ? topAnime[0]?.genres[1].name : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='titleContainer-2'>
                <span className='text'>
                  Popular animes
                </span>
              </div>

              <div className='TopAnimeListContainer'>
                {/* splice gets re-render when input */}
                {topAnimeRemoveOne && Object.keys(topAnimeRemoveOne).map((state) => {
                  return (
                    <div className='anime' key={topAnimeRemoveOne[state].mal_id}>
                        <div className='imgContainer' style={{
                          backgroundImage: `url(${topAnimeRemoveOne[state].images.jpg.large_image_url})`
                        }}/>
                        <div className='detailsContainer'>
                          <div className='titleContainer'>
                            <button className='text'>
                              {topAnimeRemoveOne[state].title}
                            </button>
                          </div>
                          <div className='otherTitlesContainer'>
                              <span className='text'>
                                Also known as: {topAnimeRemoveOne[state].title_english},{topAnimeRemoveOne[state].title_japanese} 
                              </span>
                          </div>
                          <div className='popularityContainer'>
                              <span className='text'>
                                Popularity: {topAnimeRemoveOne[state].popularity}
                              </span>
                          </div>
                          <div className='airedContainer'>
                            {/* aired.prop.from (day,month,year) & to (day,month,year)*/}
                            <span className='text'>
                              Aired: <br/>
                                From: {topAnimeRemoveOne[state]?.aired?.prop?.from.month}/{topAnimeRemoveOne[state]?.aired?.prop?.from.day}/{topAnimeRemoveOne[state]?.aired?.prop?.from.year} &nbsp;
                                To: {topAnimeRemoveOne[state]?.aired?.prop?.to.month}/{topAnimeRemoveOne[state]?.aired?.prop?.to.day}/{topAnimeRemoveOne[state]?.aired?.prop?.to.year}
                            </span>
                          </div>
                          <div className='statusContainer'>
                            <span className='text'>
                              Status: {topAnimeRemoveOne[state].status}
                            </span>
                          </div>
                          <div className='ratingContainer'>
                            <span className='text'>
                              Rating: {topAnimeRemoveOne[state].rating}
                            </span>
                          </div>
                        </div>
                    </div>
                  )
                })}
              </div>

          </div>
        </section>

        <section>
          <div className='navigation'>
              <button className='moreBtn' onClick={()=> {
                return setLimitIncrement(state => {
                  return state + 5;
                })
              }}>
                {limitIncrement !== topAnimeRemoveOne.length ? (
                  <span className='text'>
                    End of list
                  </span>
                ) : (
                  <span className='text'>
                    More <FaAngleDoubleDown className='icon'/>
                  </span>
                )}
              </button>
          </div>
        </section>

    </div>
  )
}

export default Landingpage;