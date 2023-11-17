import classes from './Logo.module.css';
import { Image } from '@mantine/core';
import image from '../../VoidIcon.svg';

export function Logo() {
    return (
        <a href="/" className={classes.logo}>
            <Image src={image} className={classes.image} />
            <h3 className={classes.logoText}>VOID</h3>
        </a>
    );
}