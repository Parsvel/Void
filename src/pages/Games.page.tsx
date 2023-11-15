import { Header } from '../components/Headers/DefaultHeader';
import { HomepageHero } from '../components/Heros/HomepageHero';
import { MainFeatures } from '../components/Features/MainFeatures';
import { Footer } from '../components/Footers/GlobalFooter';
import classes from '../General.module.css';
import { GamesGrid } from '../components/Grids/GamesGrid';

export function GamesPage() {
    return (
        <div className={classes.main}>
            <Header />
            <GamesGrid />
            <Footer />
        </div>
    );
}
