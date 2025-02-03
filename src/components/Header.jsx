import { Link } from 'react-router-dom';
import '../scss/Header.scss';
import bird from '/pajaro.png';
import HamburguerMenu from '../components/HamburguerMenu';

function Header() {
  return (
    <header className='header'>
      <div>
        <Link to='/'>
          {' '}
          <img src={bird} alt='main page' className='header__img' />
        </Link>
      </div>

      <HamburguerMenu />
    </header>
  );
}

export default Header;
