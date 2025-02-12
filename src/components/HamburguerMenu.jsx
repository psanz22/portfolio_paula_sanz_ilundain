import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/HamburguerMenu.scss';
import menu from '/hamb-menu.png';

function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className='menu'>
      <button className='button_menu ' onClick={toggleMenu}>
        <img className='menu' src={menu} alt='menu' />
      </button>{' '}
      {isOpen && (
        <ul className='header__nav'>
          <li>
            <Link className='nav_link' to='/aboutme' onClick={closeMenu}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to='proyectos' className='nav_link' onClick={closeMenu}>
              PROYECTOS
            </Link>
          </li>
          <li>
            <Link className='nav_link' to='/contacto' onClick={closeMenu}>
              CONTACTO
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default HamburguerMenu;
