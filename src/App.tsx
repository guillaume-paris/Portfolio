import React from 'react';
import './App.css';
import { useRoutes, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Header from './components/Header/Header';



const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/projects" element={<Projects />} />
        <Route path ="/resume" element={<Resume />} />
        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
  </>
  );
};

export default App;
