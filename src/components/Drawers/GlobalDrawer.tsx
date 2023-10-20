import { useDisclosure } from '@mantine/hooks';
import { Drawer, ActionIcon, Group, ScrollArea } from '@mantine/core';
import { IconCategory2 } from '@tabler/icons-react';
import { DashboardSpotlightStarterButton } from '../Spotlight/Spotlight';
import { DrawerTabs } from '../Tabs/DrawerTabs';
import { UserCard } from '../Cards/UserCard';

export function GlobalDrawer() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer opened={opened} onClose={close} position="right" title="Menu" scrollAreaComponent={ScrollArea.Autosize}>
                <Group hiddenFrom="sm" style={{ 'padding-bottom': '1rem' }} >
                    <DashboardSpotlightStarterButton />
                </Group>

                <DrawerTabs />
            </Drawer>

            <ActionIcon variant="filled" onClick={open} size="lg">
                <IconCategory2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
        </>
    );
}