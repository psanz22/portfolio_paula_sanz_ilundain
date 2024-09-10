// import menu from '../../public/ico-menu.svg';
import Link from '../components/Link';

function Header() {
  return (
    <header>
      {/* <a title='Menú' href='https://adalab.es/' target='_blank'>
        <img src={menu} alt='Menú Hamburguesa' />
      </a> */}
      <nav>
        <ul>
          <Link
            title='Blog'
            link='https://adalab.es/blog/'
            openInNewTab={false}
          />
          <Link
            title='Contacto'
            link='https://adalab.es/contacto/'
            openInNewTab={true}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
