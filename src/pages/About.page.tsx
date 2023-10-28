import { Header } from '../components/Headers/DefaultHeader';
import { Footer } from '../components/Footers/GlobalFooter';
import { GeneralFaq } from '../components/Faqs/GeneralFaq';
import { AboutHero } from '../components/Heros/AboutHero';
import { EmailBanner } from '../components/Newsletter/Newsletter';
import classes from '../General.module.css';

export function AboutPage() {
    return (
        <div className={classes.main}>
            <Header />
            <AboutHero />
            <GeneralFaq />
            <EmailBanner />
            <Footer />
        </div>
    );
}
