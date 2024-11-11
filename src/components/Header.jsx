import { Link } from 'react-router-dom';
import '../scss/Header.scss';
import bird from '../../public/pajaro.png';

function Header() {
  return (
    <header className='header'>
      <div>
        <Link to='/'>
          {' '}
          <img src={bird} alt='main page' className='header__img' />
        </Link>
      </div>
      <ul className='header__nav'>
        <li>
          <Link className='nav_link' to='/aboutme'>
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link to='proyectos' className='nav_link'>
            PROYECTOS
          </Link>
        </li>
        <li>
          <Link className='nav_link' to='/contacto'>
            CONTACTO
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
