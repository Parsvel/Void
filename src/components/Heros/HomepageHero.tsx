import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Stack, Kbd } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import classes from './HeroBullets.module.css';

export function HomepageHero() {
    const playKBD = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Kbd>⌘</Kbd>
            <span style={{ margin: '0 5px' }}>+</span>
            <Kbd>F</Kbd>
        </div>
    );

    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>Modern</span> Gaming <br /> Platform
                    </Title>
                    <Text c="dimmed" mt="md">
                        Build fully functional accessible web applications faster than ever – Mantine includes
                        more than 120 customizable components and hooks to cover you in any situation
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
                            <b>Good Community</b> – focus ring will appear only when user navigates with
                            keyboard
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button size="md" className={classes.control} rightSection={playKBD}>
                            Play
                        </Button>
                        <Button variant="default" size="md" className={classes.control}>
                            About
                        </Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}