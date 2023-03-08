import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Shirts from './pages/shirts';
import Dresses from './pages/dress';
import Trousers from './pages/trousers';
import Denim from './pages/denim';
import Sweaters from './pages/sweaters';
import Tshirts from './pages/tshirts';
import Jackets from './pages/jackets';
import Activewears from './pages/activewears';
import Browseall from './pages/browseall';
import About from './pages/about';
import Services from './pages/services';
import Header from './components/Header';
function App() {
  return (
    <Router>
    <div className="bg-white">
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/shirts' element={<Shirts />} />
          <Route path='/dress' element={<Dresses />} />
          <Route path='/trousers' element={<Trousers />} />
          <Route path='/denim' element={<Denim />} />
          <Route path='/sweaters' element={<Sweaters />} />
          <Route path='/tshirts' element={<Tshirts />} />
          <Route path='/jackets' element={<Jackets />} />
          <Route path='/activewears' element={<Activewears />} />
          <Route path='/browseall' element={<Browseall />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
