import { Header } from '../components/Headers/DefaultHeader';
import { NothingFoundInfo } from '../components/Errors/NothingFound';
import { Footer } from '../components/Footers/GlobalFooter';
import classes from '../General.module.css';

export function NothingFoundPage() {
    return (
        <div className={classes.main}>
            <Header />
            <NothingFoundInfo />
            <Footer />
        </div>
    );
}
