import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, Skeleton, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';

export function GameCardSkeleton() {

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Skeleton>
                    <Image height={180} />
                </Skeleton>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        <Skeleton height={8} mt={6} radius="xl" />
                    </Text>
                </Group>
                <Text fz="sm" mt="xs">
                    <Skeleton height={8} mt={6} radius="xl" />
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group gap={7} mt={5}>
                    <Skeleton height={8} mt={6} radius="xl" />
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Skeleton height={14} mt={6} radius="xl" />
            </Group>
        </Card>
    );
}