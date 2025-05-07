import About from './About/About';
import Hero from './Hero/Hero';
import Services from './Services/Services';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
    </main>
  );
};
export default Home;
