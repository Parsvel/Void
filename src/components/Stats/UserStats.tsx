import { Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
    IconUserPlus,
    IconDeviceGamepad2,
    IconCircleDotted,
    IconRosette,
    IconArrowUpRight,
    IconArrowDownRight,
} from '@tabler/icons-react';
import classes from './StatsGrid.module.css';

const icons = {
    user: IconUserPlus,
    controller: IconDeviceGamepad2,
    circle: IconCircleDotted,
    badge: IconRosette,
};

const data = [
    { title: 'Play Points', icon: 'circle', value: '13,456', diff: 34 },
    { title: 'Achievements', icon: 'badge', value: '52', diff: 4 },
    { title: 'Games Discovered', icon: 'controller', value: '20', diff: 18 },
] as const;

export function UserStats() {
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <Group justify="space-between">
                    <Text size="xs" c="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
                </Group>

                <Group align="flex-end" gap="xs" mt={25}>
                    <Text className={classes.value}>{stat.value}</Text>
                    <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
                        <span>{stat.diff}%</span>
                        <DiffIcon size="1rem" stroke={1.5} />
                    </Text>
                </Group>

                <Text fz="xs" c="dimmed" mt={7}>
                    Compared to previous week
                </Text>
            </Paper>
        );
    });
    return (
        <div className={classes.root}>
            <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>{stats}</SimpleGrid>
        </div>
    );
}