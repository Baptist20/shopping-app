import Shirts from './shirts';
import Dresses from './dress';
import Trousers from './trousers';
import Denim from './denim';
import Sweaters from './sweaters';
import Tshirts from './tshirts';
import Jackets from './jackets';
import Activewears from './activewears';
import Browseall from './browseall';
import Hero from '../components/hero';
import About from './about';
import Services from './services';

export default function Home() {
  return (
    <>
    <Hero />
    <Shirts />
    <Dresses />
    <Trousers />
    <Denim />
    <Sweaters />
    <Tshirts />
    <Jackets />
    <Activewears />
    <Services />
    <Browseall />
    <About />
  </>
  )
}
