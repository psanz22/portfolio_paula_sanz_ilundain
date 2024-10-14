import '../scss/Header.scss';
import bird from '../../public/pajaro.png';

function Header() {
  return (
    <header className='header'>
      <div>
        <img src={bird} alt='main page' className='header__img' />
      </div>
      <ul className='header__nav'>
        <li>
          <a className='nav_link' href='#'>
            ABOUT ME
          </a>
        </li>
        <li>
          <a href='#' className='nav_link'>
            PROYECTOS
          </a>
        </li>
        <li>
          <a className='nav_link' href='#'>
            CONTACTOS
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
