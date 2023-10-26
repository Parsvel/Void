import { Header } from '../components/Headers/DefaultHeader';
import { HomepageHero } from '../components/Heros/HomepageHero';
import { BestFeatures } from '../components/Features/BestFeatures';
import { Footer } from '../components/Footers/GlobalFooter';

export function HomePage() {
  return (
    <>
      <Header />
      <HomepageHero />
      <BestFeatures />
      <Footer />
    </>
  );
}
