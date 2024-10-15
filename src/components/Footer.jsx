import '../scss/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
      <ul className='footer__nav'>
        <a
          href='https://www.linkedin.com/in/paula-sanz-ilundain/'
          target='_blank'
          className='footer__nav__linkedin'
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size='3x'
            style={{ color: 'black' }}
          />
        </a>
        <a
          href='https://github.com/psanz22'
          target='_blank'
          className='footer__nav__git'
        >
          <FontAwesomeIcon
            icon={faGithubAlt}
            size='3x'
            style={{ color: 'black' }}
          />
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
