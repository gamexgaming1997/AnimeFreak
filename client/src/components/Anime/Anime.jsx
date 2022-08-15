import React from 'react';

// scss
import '../../scss/_Anime.scss';

const Anime = () => {

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  return (
    <div className='Anime'>

        <section>
            <div className='animealphabetcontainer'>
                {alphabet &&
                    Object.keys(alphabet).map(alpha => {
                        return (
                            <button className='alphabets' key={alpha}>
                                <span className='text'>
                                    {alphabet[alpha]}
                                </span>
                            </button>
                        )
                    })
                }
            </div>
        </section>

        <section>
            <div className='animelist'>
                
            </div>
        </section>

    </div>
  )
}

export default Anime;