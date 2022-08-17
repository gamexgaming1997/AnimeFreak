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

    const [textSearch, setTextSearch] = useState('');

  return (
    <header>
        <nav className='Navbar'>
            <div className='first-layer'>
                <img src={title} className='logo'/>
                <div className='inputFormContainer'>
                <div className='searchIconContainer'>
                    <FaSearch className='icon'/>
                </div>
                <input type='text' placeholder='Search' onChange={(e)=> {
                    return setTextSearch(e.target.value)
                }}
                className='searchFormInput'
                />
                </div>
            </div>
            <div className='second-layer'>
                <Button className='homeBtn' Span='text' Text='home' handleClick={() => navigate('/')}/>
                <Button className='animelistBtn' Span='text' Text='anime' handleClick={() => navigate('/anime')}/>
                <Button className='aboutusBtn' Span='text' Text='about'/>
                <Button className='loginsignup' Span='text' Text='login'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;