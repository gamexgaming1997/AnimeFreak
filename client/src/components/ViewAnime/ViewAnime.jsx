import React from 'react';
import { useSelector } from 'react-redux';

//scss
import '../../scss/_ViewAnime.scss';

const ViewAnime = ({ get_anime_id }) => {

    const selected_anime = useSelector(state => state.reducer.AnimeListContainer.data);

    console.log(selected_anime);

  return (
    <div className='CONTAINER'>

    </div>
  )
}

export default ViewAnime;