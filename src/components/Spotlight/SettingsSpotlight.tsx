import { rem, Button, Kbd } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDeviceGamepad, IconSearch, IconAt } from '@tabler/icons-react';
import '@mantine/spotlight/styles.css';

const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
    {
        group: 'Pages',
        actions: [
            {
                id: 'home',
                label: 'Home page',
                description: 'Where we present the product',
                leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
            },
            {
                id: 'about',
                label: 'About page',
                description: 'Where we present the product',
                leftSection: <IconAt style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
            },
        ],
    },

    {
        group: 'Games',
        actions: [
            {
                id: 'super-mario',
                label: 'Super Mario',
                description: 'The classic Super Mario Flash games',
                leftSection: <IconDeviceGamepad style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
            },
        ],
    },
];

export function SettingsSpotlight() {
    return (
        <>
            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                shortcut={['mod + J']}
                searchProps={{
                    leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
                    placeholder: 'Search Settings...',
                }}
            />
        </>
    );
}

export function SettingsSpotlightStarterButton() {
    const rightSection = (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Kbd>⌘</Kbd>
            <span style={{ margin: '0 5px' }}>+</span>
            <Kbd>J</Kbd>
        </div>
    );

    return (
        <>
            <Button
                onClick={spotlight.open}
                variant="light"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                rightSection={rightSection}
                mb="sm"
            >
                Search
            </Button>
        </>
    );
}