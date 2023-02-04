import React from 'react';
import { Link } from 'react-router-dom';
// Material UI
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
// styles
import './../../styles/colors.css';
import './Home.css';


const Home: React.FC = () => {

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
        <img src='/assets/globe-homepage.png' alt='globe-homepage' />
        <Box className='home-page-text-part' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant='h3' className='frond-end-dev'>Front-end developer</Typography>
          <Typography variant='h1' className='name-of-dev'>Guillaume Paris</Typography>
          <Typography variant='h5'>Hi there ! I'm a Epitech student at the Nancy campus. I'm currently in my 3rd year of studies. In my professional experiences, I have worked with frameworks such as React or Angular. That's why I use them to make my own portfolio!</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Button variant='outlined' className='button-nav' component={Link} to='/about'><Typography variant='h5'>About</Typography></Button>
            <Button variant='outlined' className='button-nav' component={Link} to='/projects'><Typography variant='h5'>Projects</Typography></Button>
            <Button variant='outlined' className='button-nav' component={Link} to='/resume'><Typography variant='h5'>Resume</Typography></Button>
            <Button variant='outlined' className='button-nav' component={Link} to='/contact'><Typography variant='h5'>Contact</Typography></Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;