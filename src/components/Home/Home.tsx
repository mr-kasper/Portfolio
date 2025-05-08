import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Project from './Project/Project';
import Services from './Services/Services';
import Skills from './Skills/Skills';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
};
export default Home;
