function Link(props) {
  return (
    <li className='menu-item'>
      <a
        title={props.title}
        className='menu-link'
        href={props.link}
        target={props.openInNewTab ? '_blank' : '_self'}
      >
        {props.title}
      </a>
    </li>
  );
}

export default Link;
