import { useEffect } from 'react';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

// importing AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
