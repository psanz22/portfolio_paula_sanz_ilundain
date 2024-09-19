import '../scss/App.scss';
import Header from '../components/Header';
import Main from '../components/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <footer className='footer'>
        <ul className='footer__nav'>
          <a href='' className='footer__nav__linkedin'>
            Linkedin
          </a>
          <a href='' className='footer__nav__git'>
            Github
          </a>
        </ul>
      </footer>
    </>
  );
}

export default App;
