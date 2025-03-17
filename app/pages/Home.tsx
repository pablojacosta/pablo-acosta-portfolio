import { About } from '../components/About';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
