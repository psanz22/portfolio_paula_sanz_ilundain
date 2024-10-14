import '../scss/Main.scss';

function Main() {
  return (
    <main className='main'>
      <aside className='main__aside'>
        <button className='main__aside-button'>me</button>
        <div className='main__aside__containerText'>
          <h1 className='main__aside__title'>Junior Full Stack Developer </h1>
        </div>
        <div className='main__aside__rrss'>
          <button className='main__aside__rrss-button'>Linkedin</button>
          <button className='main__aside__rrss-button'>GitHub</button>
        </div>
      </aside>
      <section className='main__section'>
        <div className='main__section__carroussel'>
          <img
            src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/12/arcane-jinx-2575357.jpg?tf=3840x'
            alt='proyectos'
            className='main__section__img'
          />
        </div>
      </section>
      <aside className='main__aside__moving slider '>
        <div className='slide-track'>
          <div className='slide'>PROYECTOS DESTACADOS</div>
          <div className='slide'>PROYECTOS DESTACADOS</div>
          <div className='slide'>PROYECTOS DESTACADOS</div>
          <div className='slide'>PROYECTOS DESTACADOS</div>
          <div className='slide'>PROYECTOS DESTACADOS</div>
          <div className='slide'>PROYECTOS DESTACADOS</div>
        </div>
      </aside>
    </main>
  );
}

export default Main;
