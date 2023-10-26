import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';

const mockdata = [
    {
        title: 'Super Fast',
        description:
            'Built with React, Void is super fast and easy to navigate with game load times as fast as 1.5 seconds.',
        icon: IconGauge,
    },
    {
        title: 'Privacy focused',
        description:
            'From Parsvel we guarentee online privacy with Void. Your data will never be shared nor sold.',
        icon: IconUser,
    },
    {
        title: 'Flash Support',
        description:
            'With Ruffle, we have brought back the amazing flash games you all know and love. Over 40% of our library is flash games.',
        icon: IconCookie,
    },
];

export function BestFeatures() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.orange[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    The Best Gaming Platform
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Privacy and Beauty in one amazing platform.
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
                hunger drives it to try biting a Steel-type Pokémon.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}