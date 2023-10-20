import classes from './Logo.module.css';
import { IconCards } from '@tabler/icons-react';

export function Logo() {
    return (
        <a href="/" className={classes.logo}>
            <IconCards size={30} />
            <h3 className={classes.logoText}>VOID</h3>
        </a>
    );
}