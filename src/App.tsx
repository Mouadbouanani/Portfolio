import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from "./components/footer";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className="bg-light dark:bg-dark text-slate-800 dark:text-white">
            <Helmet>
                <title>Mouad El Bouanani | Software Engineer</title>
                <meta name="description" content="Portfolio of Mouad El Bouanani, a Software Engineer and Full-Stack Developer specializing in building exceptional digital experiences." />
                <meta property="og:title" content="Mouad El Bouanani | Software Engineer" />
                <meta property="og:description" content="Portfolio of Mouad El Bouanani, a Software Engineer and Full-Stack Developer specializing in building exceptional digital experiences." />
                <meta property="og:type" content="website" />
                {/* Add og:image and other tags as needed */}
            </Helmet>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <ScrollToTopButton />
            <Footer />

        </div>
    );
}

export default App;