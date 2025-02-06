import terror from '/randomTerror.png';

function MainSection() {
  return (
    <section className='main__section'>
      <div className='main__section__carousel'>
        <img src={terror} alt='proyectos' className='main__section__img' />
        <div className='main__section__carousel__wrapperText'>
          <h3 className='main__section__carousel__title'>Random Terror</h3>
          <p className='main__section__carousel__description'>
            Proyecto Full Stack de interfaz sencilla. Cuando el usuario da
            click, la aplicación sugiere una película de terror. Tecnologías:
            HTML, CSS, React, SQL, Node.js
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
