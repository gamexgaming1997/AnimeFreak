import React from 'react';
import { useSelector } from 'react-redux';

//scss
import '../../scss/_ViewAnime.scss';

const ViewAnime = ({ get_anime_id }) => {

    const selected_anime = useSelector(state => get_anime_id ? state.reducer.AnimeListContainer.data : null);

    console.log(selected_anime);

  return (
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

          </div>
          <div className='suggestionContainer'>

            {/* label here */}
            <div className='titleContainer'>
              <span className='text'>
                Popular animes
              </span>
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

            <div className='cover' style={{ backgroundImage: `url(${selected_anime?.images.jpg.large_image_url})` }}>

            </div>

          </div>

          <div className='relatedAnimeContainer'>

            {/* label here */}
            <div className='titleContainer'>
              <span span className='text'>
                Related Anime
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ViewAnime;