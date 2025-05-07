import About from './About/About';
import Hero from './Hero/Hero';
import Project from './Project/Project';
import Services from './Services/Services';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
    </main>
  );
};
export default Home;
