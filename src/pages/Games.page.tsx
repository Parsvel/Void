import { Header } from '../components/Headers/DefaultHeader';
import { HomepageHero } from '../components/Heros/HomepageHero';
import { MainFeatures } from '../components/Features/MainFeatures';
import { Footer } from '../components/Footers/GlobalFooter';
import classes from '../General.module.css';

export function HomePage() {
    return (
        <div className={classes.main}>
            <Header />
            <HomepageHero />
            <MainFeatures />
            <Footer />
        </div>
    );
}
