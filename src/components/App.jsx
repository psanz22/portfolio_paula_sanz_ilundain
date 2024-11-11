import { Route, Routes } from 'react-router-dom';

import '../scss/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import AboutMe from './AboutMe';
import Proyectos from './Proyectos';
import Contacto from './Contacto';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
