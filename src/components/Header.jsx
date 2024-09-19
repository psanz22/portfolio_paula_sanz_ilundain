import '../scss/Header.scss';

function Header() {
  return (
    <header className='header'>
      <div>
        <img
          src='https://png.pngtree.com/png-vector/20190630/ourmid/pngtree-lovely-moon-icon-for-your-project-png-image_1532228.jpg'
          alt='main page'
          className='header__img'
        />
      </div>
      <ul className='header__nav'>
        <li>
          <a href='#'>ABOUT ME</a>
        </li>
        <li>
          <a href='#'>PROYECTOS</a>
        </li>
        <li>
          <a href='#'>CONTACTOS</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
