import React from 'react';
import { Routes, Route } from 'react-router-dom';
// styles
import './styles/colors.css';
import './styles/App.css';
import { theme } from './styles/theme';
// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Material UI
import { ThemeProvider } from '@mui/material/styles';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="content">
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/about" element={<About />} />
            <Route path ="/projects" element={<Projects />} />
            <Route path ="/resume" element={<Resume />} />
            <Route path ="/contact" element={<Contact />} />
            <Route path='*' element={<h1>404 Page</h1>} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
  </>
  );
};

export default App;
