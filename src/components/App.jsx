import '../scss/App.scss';
<<<<<<< HEAD
import arrow from '../../public/arrow.svg';
import scrollDown from '../../public/ico-scroll-down.svg';
import menu from '../../public/ico-menu.svg';
import one from '../../public/1.png';
import two from '../../public/2.png';
import three from '../../public/3.png';
=======
import { useState } from 'react';
>>>>>>> 38642145b41d84359f4f7d48d7caab9db0cf82d3

function App() {
  const [counter, setCounter] = useState(0);

  const sum = (a) => {
    return a + 1;
  };
  const rest = (a) => {
    return a - 1;
  };
  const handleSum = () => {
    console.log('click');
    setCounter(sum(counter));
  };
  const handleRest = () => {
    setCounter(rest(counter));
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
<<<<<<< HEAD
    <>
      <header>
        <a title='Menú' href='https://adalab.es/' target='_blank'>
          <img src={menu} alt='Menú Hamburguesa' />
        </a>
      </header>
      <main>
        <section className='section_1' id='section_1'>
          <h1 className='section_1__h1'>COMIENZOS COMPARTIDOS</h1>
          <p className='section_1__p'>
            Todo lo que necesitan para volver al cole con ilusión
          </p>
          <a href='#section_3'>
            <img
              className='section_1__img'
              src={scrollDown}
              alt='Icono scroll down'
            />
          </a>
        </section>
        <section className='section_2'>
          <span className='section_2__span'>
            HISTORIAS, MODA Y ROPA DEPORTIVA
          </span>
          <h2 className='section_2__h2'>TU TIENDA DE DEPORTE</h2>
          <p className='section_2__p'>
            El deporte nos mantiene en forma. Nos mantiene alerta. Nuestra ropa
            deportiva para hombre y mujer te ofrece las últimas tecnologías, a
            la altura de tu rendimiento, para que superes tu marca personal.
          </p>
          <button className='section_2__button'>
            <a href='https://adalab.es/' target='_blank'>
              Comprar
            </a>
          </button>
        </section>
        <section className='section_3' id='section_3'>
          <p className='section_3__p'>¡Prepáralos con tus marcas favoritas!</p>
          <h4 className='section_3__h4'>VUELTA AL COLE</h4>
          <div className='section_3__container--figure--1'>
            <figure className='section_3__figure--1'>
              <img src={one} alt='Niña con mochila' />
            </figure>
            <span className='section_3__figure--2'>Mochilas escolares</span>
          </div>
          <div className='section_3__container--figure--2'>
            <figure className='section_3__figure--2'>
              <img src={three} alt='Niño con estuche' />
            </figure>
            <span>Estuches</span>
          </div>
          <div className='section_3__container--figure--3'>
            <figure className='section_3__figure--3'>
              <img src={two} alt='Niña con bolsa de deporte' />
            </figure>
            <span>Bolsas de deporte</span>
          </div>
          <button className='section_3__button'>
            <a href='https://adalab.es/' target='_blank'>
              EMPEZAR AHORA
            </a>
          </button>
          <a href='#section_1'>
            <img className='section_3__img' src={arrow} alt='Icono flecha' />
          </a>
        </section>
      </main>
      <footer className='footer'>
        <div className='footer__container--nav'>
          <nav className='footer_nav'>
            <ul className='footer__ul'>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  ZAPATILLAS
                </a>
              </li>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  ROPA
                </a>
              </li>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  NIÑO/A
                </a>
              </li>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  DESTACADOS
                </a>
              </li>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  TIPS
                </a>
              </li>
            </ul>
          </nav>

          <nav className='footer__nav--rrss'>
            <ul className='footer__ul'>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  TWITTER
                </a>
              </li>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href='https://adalab.es/' target='_blank'>
                  YOUTUBE
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer__container--copy'>
          <span className='footer__copy'>&copy;2023</span>
          <p className='footer__p'>
            we <span>&#10084;</span> run
          </p>
        </div>
      </footer>
    </>
=======
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={handleSum}>+</button>
      <button onClick={handleRest}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
>>>>>>> 38642145b41d84359f4f7d48d7caab9db0cf82d3
  );
}

export default App;
