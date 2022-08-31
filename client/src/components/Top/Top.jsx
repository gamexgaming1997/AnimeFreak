import React from 'react';
import { useNavigate } from 'react-router-dom';

//scss
import '../../scss/_Top.scss';

// img logo
import logo from '../../img/title.png';

const Top = ({ setTitle, title }) => {

  const navigate = useNavigate();

  return (
    <div className='top'>
      <div className='innerTopContainer'>

        <div className='logoContainer'>
          <img src={logo} className='img'/>
        </div>

        <div className='searchForm'>
          <input className='input' placeholder='Search' onChange={(e)=>{
            return setTitle(e.target.value)
          }}
          onKeyPress={(e)=>{
            if(e.key === 'Enter'){
              navigate(`/search/anime`)
            }
          }}
          />
        </div>
       
      </div>
    </div>
  )
}

export default Top;