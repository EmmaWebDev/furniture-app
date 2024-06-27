
import Navbar from '../../components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Collection from './components/collection';
import About from './components/about';
import Statistics from './components/statistics';
import Testimonials from './components/testimonials';
import Works from './components/works';
import Blog from './components/blog';
import Footers from '../../components/footers';


const Home = () => {
  return (
    <div>
      
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
      <Statistics/>
      <Testimonials/>
      <Works/>
      <Blog/>
      <Footers/>
       
    </div>
  )
};

export default Home;