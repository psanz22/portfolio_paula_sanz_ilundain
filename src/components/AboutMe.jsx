import '../scss/AboutMe.scss';

function AboutMe() {
  return (
    <>
      <div className='aboutMe'>
        <h1 className='aboutMe__h1'>
          Hola,<br></br> Soy desarrolladora Full Stack Junior certificada en AWS
          Cloud.
        </h1>
        <p className='aboutMe__p'>
          Me encargo de todo el proceso de desarrollo de aplicaciones web
          gracias a mi perfil full-stack, tengo un perfil versatil gracias a mis
          trayectoria profesional previa, hablo tres idiomas con fluidez y
          recientemente aprobé el certificado AWS Cloud Practitioner.
        </p>
      </div>
      <div>
        <button>CONTACTO</button>
        <button>CV</button>
      </div>
      <div className='skills'>
        <h2 className='skills__h2'>SKILLS</h2>
        <p className='skills__p'>
          AWS · HTML5· CSS3 · SASS· JavaScript · React · Node · Express · SQL ·
          Python · Git · Responsive Design
        </p>
      </div>
    </>
  );
}

export default AboutMe;
