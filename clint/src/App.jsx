import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={isDark ? 'app dark' : 'app light'}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skill /></div>
      <div id="projects"><Projects /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />
    </div>
  );
};

export default App;
