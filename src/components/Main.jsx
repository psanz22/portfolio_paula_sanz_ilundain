import '../scss/Main.scss';
import MainAside from './MainAside';
import MainFeaturedProjects from './MainFeaturedProjects';
import MainSection from './MainSection';

function Main() {
  return (
    <main className='main'>
      <MainAside />
      <MainFeaturedProjects />
      <MainSection />
    </main>
  );
}

export default Main;
