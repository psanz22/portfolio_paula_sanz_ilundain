import terror from '/randomTerror.png';

function MainSection() {
  return (
    <section className='main__section'>
      <div className='main__section__carroussel'>
        <h2 className='main__section__title'>Random Terror</h2>
        <img src={terror} alt='proyectos' className='main__section__img' />
        <p>
          Proyecto Full Stack de interfaz sencilla. Cuando el usuario da click,
          la aplicación sugiere una película de terror. Tecnologías: HTML, CSS,
          React, SQL, Node.js
        </p>
      </div>
    </section>
  );
}

export default MainSection;
