import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import title from '../../img/title.png';

// scss
import '../../scss/_Navbar.scss';

// reusable component
import Button from '../../ReusableComponents/Button';

const Navbar = () => {

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
                <Button className='homeBtn' Span='text' Text='home'/>
                <Button className='animelistBtn' Span='text' Text='anime'/>
                <Button className='aboutusBtn' Span='text' Text='about'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;