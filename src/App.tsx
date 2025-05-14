import Navbar from './components/Navbar.tsx';
import Hero from './Sections/Hero.tsx';
import About from './Sections/About.tsx';
import Projects from './Sections/Projects.tsx';
import Testimonials from './Sections/Testimonials.tsx';
import Contact from './Sections/Contact.tsx';
import Footer from './Sections/Footer.tsx';
import Experience from './Sections/Experience.tsx';

export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
