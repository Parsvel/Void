import { Grid, Skeleton, Container } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { useState } from 'react';

async function getGames() {
    const response = await fetch('https://badcarrot.playvoid.xyz/fetch/all/games', { mode: 'cors' });

    return response.json();
}

const gameDbFetch = await getGames()
const gamesList = gameDbFetch.data

const badgeList = [
    { id: 'flash', emoji: '🎮', label: 'Flash' },
    { id: 'flash', emoji: '🎮', label: 'HTML5' },
    { id: 'puzzle', emoji: '🧩', label: 'Puzzle' },
];

const features = badgeList

function createBadgeList (tags: any) {
    let badges = tags.split(',')
    let badgesList: any = []
    badges.forEach((badge: any) => {
        if (badgeList.some(e => e.id === badge)) {
            badgesList.push(badgeList.find(vendor => vendor['id'] === badge))
        }
    })
    return badgesList
}

export function GamesGrid() {
    const [loading, setLoading] = useState(true);

    function navigateTo(url: string) {
        window.location.href = url;
    }

    return (
        <Container className={classes.container} mt="md">
            <Grid>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                    {gamesList.map((game: any) => (
                        <Card withBorder radius="md" p="md" className={classes.card}>
                            <Card.Section>
                                <Skeleton visible={loading}>
                                    <Image src={'http://localhost:6448/data/gameContent/' + game.id.slice(4) + '/images/CardBanner.png'} alt={'Game Banner'} height={180} onLoad={() => setLoading((l) => !l)} />
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
                                <Button radius="md" style={{ flex: 1 }} onClick={() => navigateTo('/game/play/'+game.primename)}>
                                    Play Now
                                </Button>
                                <Button radius="md" variant="default" style={{ flex: 1 }} onClick={() => navigateTo('/game/view/' + game.primename)}>
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