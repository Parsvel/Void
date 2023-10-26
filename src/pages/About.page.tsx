import { Header } from '../components/Headers/DefaultHeader';
import { Footer } from '../components/Footers/GlobalFooter';
import { GeneralFaq } from '../components/Faqs/GeneralFaq';
import { AboutHero } from '../components/Heros/AboutHero';

export function AboutPage() {
    return (
        <>
            <Header />
            <AboutHero />
            <GeneralFaq />
            <Footer />
        </>
    );
}
