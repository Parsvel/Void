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
import { useNavigate } from "react-router-dom";

export function JumpCard() {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    function navigateTo(url: string) {
        navigate(url);
    }

    const mockdata = [
        { title: 'Home', icon: IconHome, color: 'violet', onclick: () => navigateTo('/home') },
        { title: 'Profile', icon: IconUserCircle, color: 'indigo', onclick: () => navigateTo('/me/profile') },
        { title: 'Notifications', icon: IconBell, color: 'blue', onclick: () => navigateTo('/me/notifications') },
        { title: 'Library', icon: IconListDetails, color: 'green', onclick: () => navigateTo('/me/libraru') },
        { title: 'Friends', icon: IconFriends, color: 'teal', onclick: () => navigateTo('/me/friends') },
        { title: 'Settings', icon: IconSettings, color: 'cyan', onclick: () => navigateTo('/settings') },
    ];

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item} onClick={item.onclick}>
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