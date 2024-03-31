import './App.css';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Service from './components/services/Service';
import Home from './components/home/Home';
import ApplyLoan from './components/ApplyLoan';
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='' element={<Home />} ></Route>
        <Route path='about' element={<About />} ></Route>
        <Route path='services' element={<Service />} ></Route>
        <Route path='apply-loan' element={<ApplyLoan />} ></Route>
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
