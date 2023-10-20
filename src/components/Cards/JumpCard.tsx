import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    useMantineTheme,
} from '@mantine/core';
import {
    IconHome,
    IconUserCircle,
    IconBell,
    IconListDetails,
    IconFriends,
    IconSettings,
} from '@tabler/icons-react';
import classes from './ActionsGrid.module.css';

const mockdata = [
    { title: 'Home', icon: IconHome, color: 'violet' },
    { title: 'Profile', icon: IconUserCircle, color: 'indigo' },
    { title: 'Notifications', icon: IconBell, color: 'blue' },
    { title: 'Library', icon: IconListDetails, color: 'green' },
    { title: 'Friends', icon: IconFriends, color: 'teal' },
    { title: 'Settings', icon: IconSettings, color: 'cyan' },
];

export function JumpCard() {
    const theme = useMantineTheme();

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size="2rem" />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Card withBorder radius="md" className={classes.card} style={{ width: '100%' }}>
            <Group justify="space-between">
                <Text className={classes.title}>Quick Jump</Text>
            </Group>
            <SimpleGrid cols={3} mt="md">
                {items}
            </SimpleGrid>
        </Card>
    );
}