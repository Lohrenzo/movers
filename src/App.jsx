import { useEffect, useState } from 'react';

// React Router
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Web Pages
import Homepage from './webpages/Hopepage';
import About from './webpages/About';
import Services from './webpages/Services';
import Works from './webpages/Works';
import SingleWorkDetail from './webpages/SingleWorkDetail';
import Contact from './webpages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate a delay of 1 second
    const delay = setTimeout(() => {
      // console.log("Page Loaded");
      setIsLoading(false);
    }, 1000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, [])

  // Scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className='relative overflow-x-hidden'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/works' element={<Works />} />
        <Route path='/works/detail/:id' element={<SingleWorkDetail />} />
      </Routes>

      {isLoading &&
        <section className='fixed top-0 bottom-0 left-0 w-[100vw] h-[100vh] dark:bg-[#081220] bg-[#ffffff] dark:text-white text-black z-50 flex items-center justify-center font-bold'>
          {/* loading... */}
          <div className="loader">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </section>
      }

      <Footer />
    </section>
  )
}

export default App
