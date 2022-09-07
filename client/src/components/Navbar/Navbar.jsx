import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// scss
import '../../scss/_Navbar.scss';

// reusable component
import Button from '../../ReusableComponents/Button';

const Navbar = () => {

  const navigate = useNavigate();

  //hooks
  const [breakpoint] = useState(window.matchMedia('(max-width: 416px)'));
  const [show, setShow] = useState();

  useEffect(() => {
    if (show) {

    }
  }, [show])

  return (
    <header>
      <nav className='Navbar'>

        {/* </div> */}

        <div className='second-layer'>
          {breakpoint.matches ? (
            <Box className='bar'>
              <AppBar position="static" className='appBar'>
                <Toolbar className='innerBar'>
                  <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className='IconBtn'
                    sx={{ mr: 1 }}
                    onClick={() => {
                      setShow(state => !state)
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="span" component="div">
                    Menu
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          ) : (
            <>
              {/* NONE */}
            </>
          )}

          {breakpoint.matches ? (
            <>
              {show ? (
                <>
                  <Button className='homeBtn' Span='text' Text='home' handleClick={() => {
                    navigate('/');
                    window.location.reload();
                  }} />
                  <Button className='animelistBtn' Span='text' Text='anime' handleClick={() => {
                    navigate('/anime');
                    window.location.reload();
                  }} />
                  <Button className='aboutusBtn' Span='text' Text='about'
                    handleClick={() => {
                      navigate('/about');
                      window.location.reload();
                    }}
                  />
                </>
              ) : (
                <>
                </>
              )}
            </>
          ) : (
            <>
              <Button className='homeBtn' Span='text' Text='home' handleClick={() => {
                navigate('/');
                window.location.reload();
              }} />
              <Button className='animelistBtn' Span='text' Text='anime' handleClick={() => {
                navigate('/anime');
                window.location.reload();
              }} />
              <Button className='aboutusBtn' Span='text' Text='about'
                handleClick={() => {
                  navigate('/about');
                  window.location.reload();
                }}
              />
            </>
          )}
        </div>

      </nav>
    </header>
  )
}

export default Navbar;