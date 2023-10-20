import { Header } from '../components/Headers/DefaultHeader';
import { HomepageHero } from '../components/Heros/HomepageHero';
import { MainFeatures } from '../components/Features/MainFeatures';
import { Footer } from '../components/Footers/GlobalFooter';

export function HomePage() {
  return (
    <>
      <Header />
      <HomepageHero />
      <MainFeatures />
      <Footer />
    </>
  );
}
