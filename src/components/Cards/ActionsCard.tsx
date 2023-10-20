import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    useMantineTheme,
    ActionIcon,
    useMantineColorScheme,
     useComputedColorScheme,
} from '@mantine/core';
import { IconSun, IconMoon, IconBell, IconBellOff } from '@tabler/icons-react';
import classes from './ActionsGrid.module.css';
import cx from 'clsx';

export function ActionsCard() {
    const theme = useMantineTheme();
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Card withBorder radius="md" className={classes.card} style={{ width: '100%' }}>
            <Group justify="space-between">
                <Text className={classes.title}>Quick Actions</Text>
            </Group>
            <SimpleGrid cols={3} mt="md">
                <UnstyledButton className={classes.item} onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
                    <IconSun className={cx(classes.icon, classes.light)} color={theme.colors['violet'][6]} size="2rem" />
                    <IconMoon className={cx(classes.icon, classes.dark)} color={theme.colors['violet'][6]} size="2rem" />
                    <Text size="xs" mt={7}>
                        Theme
                    </Text>
                </UnstyledButton>
                <UnstyledButton className={classes.item} onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
                    <IconBell className={cx(classes.icon, classes.light)} color={theme.colors['violet'][6]} size="2rem" />
                    <IconBellOff className={cx(classes.icon, classes.dark)} color={theme.colors['violet'][6]} size="2rem" />
                    <Text size="xs" mt={7}>
                        Do Not Distrub
                    </Text>
                </UnstyledButton>
            </SimpleGrid>
        </Card>
    );
}