import { useEffect, useState } from 'react';
import { Grid, Skeleton, Container } from '@mantine/core';
import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './BadgeCard.module.css';

const badgeList = [
    { id: 'flash', emoji: '🎮', label: 'Flash' },
    { id: 'html5', emoji: '🎮', label: 'HTML5' },
    { id: 'puzzle', emoji: '🧩', label: 'Puzzle' },
];

function createBadgeList(tags: any) {
    let badges = tags.split(',');
    let badgesList: any = [];
    badges.forEach((badge: any) => {
        if (badgeList.some((e) => e.id === badge)) {
            badgesList.push(badgeList.find((vendor) => vendor['id'] === badge));
        }
    });
    return badgesList;
}

export function GamesGrid() {
    const [gamesList, setGamesList] = useState([]);
    const [imageLoading, setImageLoading] = useState(true);
    const [gamesLoading, setGamesLoading] = useState(true);

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await fetch('https://badcarrot.playvoid.xyz/fetch/all/games', {
                    mode: 'cors',
                });
                const gameDbFetch = await response.json();
                setGamesList(gameDbFetch.data);
                setGamesLoading(false);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        }

        fetchGames();
    }, []);

    function navigateTo(url: string) {
        window.location.href = url;
    }

    return (
        <Container className={classes.container} mt="md">
            <Grid>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                    {gamesList.map((game: any) => (
                        <Card withBorder radius="md" p="md" className={classes.card} key={game.id}>
                            <Card.Section>
                                <Skeleton visible={imageLoading}>
                                    <Image
                                        src={`https://cdn.playvoid.xyz/data/gameContent/${game.id.slice(4)}/images/CardBanner.png`}
                                        alt="Game Banner"
                                        height={180}
                                        onLoad={() => setImageLoading((l) => !l)}
                                    />
                                </Skeleton>
                            </Card.Section>

                            <Card.Section className={classes.section} mt="md">
                                <Group justify="apart">
                                    <Text fz="lg" fw={500}>
                                        {game.name}
                                    </Text>
                                </Group>
                                <Text fz="sm" mt="xs">
                                    {game.description}
                                </Text>
                            </Card.Section>

                            <Card.Section className={classes.section}>
                                <Group gap={7} mt="md">
                                    {createBadgeList(game.tags).map((badge: any) => (
                                        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
                                            {badge.label}
                                        </Badge>
                                    ))}
                                </Group>
                            </Card.Section>

                            <Group mt="xs">
                                <Button
                                    radius="md"
                                    style={{ flex: 1 }}
                                    onClick={() => navigateTo(`/game/play/${game.primename}`)}
                                >
                                    Play Now
                                </Button>
                                <Button
                                    radius="md"
                                    variant="default"
                                    style={{ flex: 1 }}
                                    onClick={() => navigateTo(`/game/view/${game.primename}`)}
                                >
                                    View
                                </Button>
                            </Group>
                        </Card>
                    ))}
                </Grid.Col>
            </Grid>
        </Container>
    );
}
