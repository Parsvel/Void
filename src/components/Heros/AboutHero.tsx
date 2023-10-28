import { Title, Text, Button, Container, Kbd } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';
import { useNavigate } from "react-router-dom";
import { IconArrowBigDown } from '@tabler/icons-react';

export function AboutHero() {
    const navigate = useNavigate();

    const playKBD = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Kbd>⌘</Kbd>
            <span style={{ margin: '0 5px' }}>+</span>
            <Kbd>F</Kbd>
        </div>
    );

    function navigateTo(url: string) {
        window.location.href = url;
    }

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    The{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        best
                    </Text>{' '}
                    way to{' '}
                    <Text component="span" className={classes.highlight} inherit>
                        play
                    </Text>
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" c="dimmed" className={classes.description}>
                        From Parsvel, it’s Void. A online gaming platform built around people who love flash and browser based games.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} size="lg" rightSection={playKBD} onClick={() => navigateTo('/home')}>
                        Play
                    </Button>
                    <Button className={classes.control} size="lg" rightSection={<IconArrowBigDown />} variant="default" color="gray">
                        Keep Reading
                    </Button>
                </div>
            </div>
        </Container>
    );
}