import '../scss/App.scss';

function App() {
  return (
    <>
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
      {/* <main>
        <aside>
          <img
            src='https://static.vecteezy.com/system/resources/previews/012/002/361/original/me-letter-logo-design-initial-letters-me-logo-icon-abstract-letter-me-minimal-logo-design-template-m-e-letter-design-with-black-colors-me-logo-vector.jpg'
            alt='about me'
          />
        </aside>
        <section>
          <img
            src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/12/arcane-jinx-2575357.jpg?tf=3840x'
            alt='proyectos'
          />
        </section>
      </main>
      <footer>
        <ul>
          <a href=''>Linkedin</a>
          <a href=''>Github</a>
        </ul>
      </footer> */}
    </>
  );
}

export default App;
