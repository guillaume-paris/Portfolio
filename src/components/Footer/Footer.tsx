import React from 'react';
// Material UI
import { Box } from '@mui/system';
import { Typography, Link } from '@mui/material';
// styles
import './../../styles/colors.css';
// config
import { socialLinks } from './config';

const Footer: React.FC = () => {
  
    return (
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em 0',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20px',
        borderTop: 1,
        borderColor: '#333333',
        backgroundColor: '#222222',
        }}>
        <Typography variant='body2'>
          <Link href={socialLinks.LinkedIn} style={{ marginLeft: '2em', color: '#fff', opacity: '0.5' }}>LinkedIn</Link>
          <Link href={socialLinks.Github} style={{ marginLeft: '2em', color: '#fff', opacity: '0.5' }}>Github</Link>
        </Typography>
        <Typography variant='body2' style={{ marginLeft: '2em', marginRight: '2em', color: '#fff', opacity: '0.5' }}>
          © 2023 Guillaume-Paris-Portfolio
        </Typography>
      </Box>
    );
  };

export default Footer;
