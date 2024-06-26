
import Navbar from '../../components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Collection from './components/collection';
import About from './components/about';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
       
    </div>
  )
};

export default Home;