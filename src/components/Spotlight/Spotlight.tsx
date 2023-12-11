import { rem, Button, Kbd } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDeviceGamepad, IconSearch, IconAt, IconSettings, IconDeviceGamepad2, IconApps, IconUserHexagon, IconBrush, IconRocket, IconLogin2, IconUserPlus } from '@tabler/icons-react';
import '@mantine/spotlight/styles.css';
import { useNavigate } from "react-router-dom";

export function MainSpotlight() {
    const navigate = useNavigate();

    function navigateTo(url: string) {
        window.location.href = url;
    }

    const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
        {
            group: 'Pages',
            actions: [
                {
                    id: 'landing',
                    label: 'Landing page',
                    description: 'Where we present the product',
                    onClick: () => navigateTo('/'),
                    leftSection: <IconRocket style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'home',
                    label: 'Home page',
                    description: 'Where we present the product',
                    onClick: () => navigateTo('/home'),
                    leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'about',
                    label: 'About page',
                    description: 'Where we present the product',
                    onClick: () => navigateTo('/about'),
                    leftSection: <IconAt style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'games',
                    label: 'Games library',
                    description: 'The entire Void game library',
                    onClick: () => navigateTo('/games'),
                    leftSection: <IconDeviceGamepad2 style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'login',
                    label: 'Login page',
                    description: 'Log into your Void account',
                    onClick: () => navigateTo('/login'),
                    leftSection: <IconLogin2 style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'register',
                    label: 'Register page',
                    description: 'Create an Void account',
                    onClick: () => navigateTo('/login?ref=register'),
                    leftSection: <IconUserPlus style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'profile',
                    label: 'Profile',
                    description: 'Your account profile',
                    onClick: () => navigateTo('/me/profile'),
                    leftSection: <IconUserHexagon style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'library',
                    label: 'My library',
                    description: 'Your personal game library',
                    onClick: () => navigateTo('/me/library'),
                    leftSection: <IconApps style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
                {
                    id: 'settings',
                    label: 'Settings page',
                    description: 'Where we present the product',
                    onClick: () => navigateTo('/settings'),
                    leftSection: <IconSettings style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
            ],
        },

        {
            group: 'Games',
            actions: [
                {
                    id: 'plumber',
                    label: 'Plumber',
                    description: 'The classic Plumber mini game.',
                    onClick: () => navigateTo('/game/view/plumber'),
                    leftSection: <IconDeviceGamepad style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
            ],
        },

        {
            group: 'Settings',
            actions: [
                {
                    id: 'theme',
                    label: 'Theme',
                    description: 'The theme for Void',
                    onClick: () => navigateTo('/settings#theme'),
                    leftSection: <IconBrush style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
                },
            ],
        },
    ];

    return (
        <>
            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                shortcut={['mod + K', 'mod + P', '/']}
                searchProps={{
                    leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
                    placeholder: 'Search...',
                }}
                scrollable
                maxHeight={550}
                style={{
                    position: 'fixed',
                    zIndex: 999999,
                }}
            />
        </>
    );
}

export function SpotlightStarterButton() {
    const rightSection = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Kbd>⌘</Kbd>
            <span style={{ margin: '0 5px' }}>+</span>
            <Kbd>K</Kbd>
        </div>
    );

    return (
        <>
            <Button
                onClick={spotlight.open}
                variant="light"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                rightSection={rightSection}
            >
                Search
            </Button>
        </>
    );
}

export function DashboardSpotlightStarterButton() {

    return (
        <>
            <Button
                style={{ width: '100%' }}
                onClick={spotlight.open}
                variant="light"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            >
                Search
            </Button>
        </>
    );
}