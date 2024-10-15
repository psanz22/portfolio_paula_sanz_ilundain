import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function MainAside() {
  return (
    <aside className='main__aside'>
      <button className='main__aside-button'>Me.</button>
      <div className='main__aside__containerText'>
        <h1 className='main__aside__title'>Junior Full Stack Developer </h1>
      </div>
      <div className='main__aside__rrss'>
        <button className='main__aside__rrss-button'>
          <a
            href='https://www.linkedin.com/in/paula-sanz-ilundain/'
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
          </a>
        </button>
        <button className='main__aside__rrss-button'>
          <a href='https://github.com/psanz22' target='_blank'>
            <FontAwesomeIcon icon={faGithubAlt} size='2x' />
          </a>
        </button>
      </div>
    </aside>
  );
}

export default MainAside;
