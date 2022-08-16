import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// scss
import '../../scss/_Anime.scss';

const Anime = () => {


  return (
    <div className='Anime'>

        <section>
            <div className='animelistContainer'>

            </div>
        </section>
        <footer>
            <div className='footer'>
                <Stack spacing={2} className='stack'>
                    <Pagination count={10} color="primary" className='pagination'/>
                </Stack>
            </div>
        </footer>

    </div>
  )
}

export default Anime;