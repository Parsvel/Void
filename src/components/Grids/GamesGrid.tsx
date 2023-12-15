import { useEffect, useState } from 'react';
import { SimpleGrid, Skeleton, Container, Avatar } from '@mantine/core';
import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { BrowserView, MobileView } from 'react-device-detect';
import classes from './BadgeCard.module.css';

const badgeList = [
    { id: 'flash', emoji: '🎮', label: 'Flash' },
    { id: 'html5', emoji: '🎮', label: 'HTML5' },
    { id: 'puzzle', emoji: '🧩', label: 'Puzzle' },
    { id: 'story', emoji: '📖', label: 'Story' },
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
    const [imageLoadingStates, setImageLoadingStates] = useState<boolean[]>([]);
    const [gamesLoading, setGamesLoading] = useState(true);

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await fetch('https://api.playvoid.xyz/fetch/all/games', {
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
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                {gamesList.map((game: any, index: number) => (
                    <Card withBorder radius="md" p="md" className={classes.card} key={game.id}>
                        <Card.Section>
                            <Skeleton visible={imageLoadingStates[index]}>
                                <Image
                                    src={`https://cdn.playvoid.xyz/data/gameContent/${game.id.slice(4)}/images/CardBanner.png`}
                                    alt="Game Banner"
                                    height={180}
                                    onLoad={() => {
                                        setImageLoadingStates((states) => states.map((state, i) => (i === index ? false : state)));
                                    }}
                                />
                            </Skeleton>
                        </Card.Section>

                        <Card.Section className={classes.section} mt="md">
                            <Group justify="apart">
                                <Avatar variant="filled" radius="sm" src={'https://cdn.playvoid.xyz/data/gameContent/' + game.id.slice(4) + '/images/PrimaryIcon.png'} />
                                <Text fw={600} style={{ fontSize: '25px' }}>
                                    {game.name}
                                </Text>
                            </Group>
                            <Text fz="sm" mt="xs" className={classes.longtext}>
                                {game.short_description}
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
                            <BrowserView>
                                <Button
                                    radius="md"
                                    style={{ flex: 1 }}
                                    onClick={() => navigateTo(`/game/play/${game.primename}`)}
                                >
                                    Play Now
                                </Button>
                            </BrowserView>
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
            </SimpleGrid>
        </Container>
    );
}
