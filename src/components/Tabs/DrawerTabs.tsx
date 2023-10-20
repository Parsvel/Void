import { Tabs, rem, Group, Stack, Notification } from '@mantine/core';
import { IconGridDots, IconBell, IconSettings } from '@tabler/icons-react';
import { JumpCard } from '../Cards/JumpCard';
import { ActionsCard } from '../Cards/ActionsCard';
import { QuickSettings } from '../Cards/QuickSettingsCard';
import { UserCard } from '../Cards/UserCard';

export function DrawerTabs () {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
        <Tabs defaultValue="account">
            <Tabs.List grow>
                <Tabs.Tab value="account" leftSection={<IconSettings style={iconStyle} />}>
                    Account
                </Tabs.Tab>
                <Tabs.Tab value="actions" leftSection={<IconGridDots style={iconStyle} />}>
                    Quick Actions
                </Tabs.Tab>
                <Tabs.Tab value="notifications" leftSection={<IconBell style={iconStyle} />}>
                    Notifications
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="account">

                <Stack style={{ 'padding-top': '1rem' }}>
                    <UserCard />
                </Stack>

            </Tabs.Panel>

            <Tabs.Panel value="actions">
                <Group style={{ 'padding-top': '1rem', 'padding-bottom': '1rem', width: '100%' }}>
                    <ActionsCard />
                </Group>
                <Group style={{ 'padding-bottom': '1rem', width: '100%' }}>
                    <JumpCard />
                </Group>

                <QuickSettings />
            </Tabs.Panel>

            <Tabs.Panel value="notifications">
                
                <Stack style={{ 'padding-top': '1rem' }}>
                    <Notification title="Welcome to Void!">
                        Get started with your Void account by finishing this checklist.
                    </Notification>
                </Stack>

            </Tabs.Panel>
        </Tabs>
    );
}