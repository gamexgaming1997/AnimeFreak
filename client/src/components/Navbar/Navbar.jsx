import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import title from '../../img/title.png';

// scss
import '../../scss/_Navbar.scss';

// reusable component
import Button from '../../ReusableComponents/Button';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <header>
        <nav className='Navbar'>

            {/* </div> */}

            <div className='second-layer'>
                <Button className='homeBtn' Span='text' Text='home' handleClick={() => {
                  navigate('/');
                  window.location.reload();
                }}/>
                <Button className='animelistBtn' Span='text' Text='anime' handleClick={() => {
                  navigate('/anime');
                  window.location.reload();
                }}/>
                <Button className='aboutusBtn' Span='text' Text='about'
                handleClick={() => {
                  navigate('/about');
                  window.location.reload();
                }}
                />
            </div>

        </nav>
    </header>
  )
}

export default Navbar;