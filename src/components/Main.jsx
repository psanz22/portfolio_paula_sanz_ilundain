import '../scss/Main.scss';
import MainAside from './MainAside';
import MainFeaturedProjects from './MainFeaturedProjects';
import MainSection from './MainSection';

function Main() {
  return (
    <main className='main'>
      <MainAside />
      <MainSection />
      <MainFeaturedProjects />
    </main>
  );
}

export default Main;
