import { Header } from '../components/Headers/DefaultHeader';
import { DemoAlert } from '../components/Alerts/DemoAlert';
import { HomepageHero } from '../components/Heros/HomepageHero';
import { BestFeatures } from '../components/Features/BestFeatures';
import { Footer } from '../components/Footers/GlobalFooter';
import { GeneralAffix } from '../components/Affix/Affix';
import { EmailBanner } from '../components/Newsletter/Newsletter';
import classes from '../General.module.css';

export function HomePage() {
  return (
    <div className={classes.main}>
      <Header />
      <GeneralAffix />
      <DemoAlert />
      <HomepageHero />
      <BestFeatures />
      <EmailBanner />
      <Footer />
    </div>
  );
}
