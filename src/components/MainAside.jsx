import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function MainAside() {
  return (
    <aside className='main__aside'>
      <button className='main__aside-button'>me</button>
      <div className='main__aside__containerText'>
        <h1 className='main__aside__title'>Junior Full Stack Developer </h1>
      </div>
      <div className='main__aside__rrss'>
        <button className='main__aside__rrss-button'>
          {' '}
          <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
        </button>
        <button className='main__aside__rrss-button'>
          <FontAwesomeIcon icon={faGithubAlt} size='2x' />
        </button>
      </div>
    </aside>
  );
}

export default MainAside;
