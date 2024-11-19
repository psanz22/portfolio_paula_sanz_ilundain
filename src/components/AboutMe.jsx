import React from 'react';
import '../scss/AboutMe.scss';
// import ButtonAnimation from './buttonAnimation';

function AboutMe() {
  return (
    <div className='wrapper__sobreMi'>
      <div className='sobreMi'>
        <h1 className='sobreMi__title'>Sobre mi</h1>
        <h1>_____________________________</h1>
        <p className='sobreMi__text'>
          Hey, me llamo Paula Sanz. Vengo del mundo audiovisual, donde descubrí
          mi pasión por las historias visuales y la creatividad. Con esa misma
          energía, me he volcado en el desarrollo web, combinando mis
          habilidades técnicas con una visión artística. Me interesa
          especialmente la programación creativa y disfruto explorando nuevas
          tecnologías para crear experiencias web atractivas y funcionales. Si
          estás buscando alguien con ojo para el detalle y creatividad técnica,
          ¡hablemos!
        </p>
        <a href='#'>curriculum vitae</a>
      </div>
      <div className='wrapper__img'>
        <img
          className='sobreMi__img'
          src='https://www.mundodeportivo.com/alfabeta/hero/2022/01/fortnite-lol-arcane-skin.jpg?width=768&aspect_ratio=16:9&format=nowebp'
          alt=''
        />
        {/* <ButtonAnimation /> */}
      </div>
    </div>
  );
}

export default AboutMe;
