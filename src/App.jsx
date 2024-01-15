
// React Router
import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Web Pages
import Homepage from './webpages/Hopepage';
import About from './webpages/About';
import Services from './webpages/Services';

function App() {

  return (
    <section className='overflow-x-hidden'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      <Footer />
    </section>
  )
}

export default App
