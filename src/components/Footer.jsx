function Footer() {
  return (
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
  );
}

export default Footer;
