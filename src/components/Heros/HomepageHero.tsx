import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Stack, Kbd } from '@mantine/core';
import { IconCheck, IconBaguette } from '@tabler/icons-react';
import image from '../../VoidRunningMan.svg';
import classes from './HeroBullets.module.css';
import { useNavigate } from "react-router-dom";

export function HomepageHero() {
    const navigate = useNavigate();

    const playKBD = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Kbd>⌘</Kbd>
            <span style={{ margin: '0 5px' }}>+</span>
            <Kbd>F</Kbd>
        </div>
    );

    function navigateTo(url: string) {
        navigate(url);
    }

    return (
        <Container size="lg">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        experience
                    </Title>
                    <Text c="dimmed" mt="md">
                        From Parsvel, it’s Void. A online gaming platform built around people who love flash and browser based games.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>Huge Game Library</b> – Over 50 games from a variety of categories avaliable for you to play on demand.
                        </List.Item>
                        <List.Item>
                            <b>Flash Games Support</b> – With the help of the Ruffle Flash emulator, we are able to revive your favorite games.
                        </List.Item>
                        <List.Item>
                            <b>Good Community</b> – Great minds think alike, our community is filled with amazing people.
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button size="md" className={classes.control} rightSection={playKBD} onClick={() => navigateTo('/home')}>
                            Play
                        </Button>
                        <Button variant="default" size="md" className={classes.control} rightSection={<IconBaguette />} onClick={() => navigateTo('/about')}>
                            About
                        </Button>
                    </Group>
                </div>
                <Image src={image} className={classes.image} />
            </div>
        </Container>
    );
}