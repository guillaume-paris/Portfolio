import React from 'react';
import { Link } from 'react-router-dom';
// Material UI
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
// styles
import './../../styles/colors.css';
import './Header.css'

const Header: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 7, mr: 5, p: 4 }}>
        <Link to='/' className='logo-text-header' >
          <img src='/assets/logo-header.png' alt='logo-header' />
          <Typography variant='h2' sx={{ fontWeight: 600, ml: 1 }}>Web</Typography><Typography variant='h2'>Dev</Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 7, mr: 5, p: 4 }}>
        <Link to='/'><Typography variant='h5'>Home</Typography></Link>
        <Link to='/about'><Typography variant='h5'>About</Typography></Link>
        <Link to='/projects'><Typography variant='h5'>Projects</Typography></Link>
        <Link to='/resume'><Typography variant='h5'>Resume</Typography></Link>
        <Link to='/contact'><Typography variant='h5'>Contact</Typography></Link>
      </Box>
    </Box>
  );
};

export default Header;
