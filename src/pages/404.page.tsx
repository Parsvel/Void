import { Header } from '../components/Headers/DefaultHeader';
import { NothingFoundInfo } from '../components/Errors/NothingFound';
import { Footer } from '../components/Footers/GlobalFooter';

export function NothingFoundPage() {
    return (
        <>
            <Header />
            <NothingFoundInfo />
            <Footer />
        </>
    );
}
