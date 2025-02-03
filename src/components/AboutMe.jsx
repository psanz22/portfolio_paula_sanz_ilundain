import React from 'react';
import '../scss/AboutMe.scss';
// import ButtonAnimation from './buttonAnimation';

function AboutMe() {
  return (
    <div className='wrapper__sobreMi'>
      <div className='sobreMi'>
        <h1 className='sobreMi__title'>
          {' '}
          Hola, soy Full Stack Developer certificada en AWS Cloud.
        </h1>
        <h1>_____________________________</h1>
        <p className='sobreMi__text'>
          Tras una carrera dedicada al audiovisual di un cambio de rumbo
          profesional y decidí adentrarme en el mundo de la programación. Estoy
          actualmente en búsqueda de mi próximo proyecto. ¡Contactemos!
        </p>
        <a href='#'>curriculum vitae</a>
      </div>
      <div className='wrapper__img'></div>
    </div>
  );
}

export default AboutMe;
