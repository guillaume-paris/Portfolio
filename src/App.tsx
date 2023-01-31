import React from 'react';
import './styles/colors.css';
import { useRoutes, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
// Material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 24,
    h1: {
      fontSize: 32,
      color: '#fff',
    },
    h2: {
      fontSize: 28,
      color: '#fff',
    },
    h3: {
      fontSize: 24,
      color: '#fff',
    },
    h4: {
      fontSize: 22,
      color: '#fff',
    },
    h5: {
      fontSize: 20,
      color: '#fff',
    },
    h6: {
      fontSize: 18,
      color: '#fff',
    },
    body1: {
      fontSize: 16,
      color: '#fff',
    },
    body2: {
      fontSize: 14,
      color: '#fff',
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className='bg-color'>
          <Header />
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/about" element={<About />} />
            <Route path ="/projects" element={<Projects />} />
            <Route path ="/resume" element={<Resume />} />
            <Route path ="/contact" element={<Contact />} />
            <Route path='*' element={<h1>404 Page</h1>} />
          </Routes>
        </Box>
      </ThemeProvider>
  </>
  );
};

export default App;
