import { Helmet } from 'react-helmet-async';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const { currentTheme } = useTheme();

  return (
    <div className={`min-h-screen ${currentTheme.sectionBg} ${currentTheme.text} font-sans`}>
      <Helmet>
        <title>Mouad El Bouanani | Software Engineer</title>
        <meta name="description" content="Portfolio of Mouad El Bouanani, a Software Engineer and Full-Stack Developer specializing in building exceptional digital experiences." />
        <meta property="og:title" content="Mouad El Bouanani | Software Engineer" />
        <meta property="og:description" content="Portfolio of Mouad El Bouanani, a Software Engineer and Full-Stack Developer specializing in building exceptional digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mouadbouanani.github.io/Portfolio/" />
        <meta property="og:image" content="https://mouadbouanani.github.io/Portfolio/mouad.png" />
      </Helmet>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;