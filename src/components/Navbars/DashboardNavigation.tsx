import {
    TextInput,
    Code,
    UnstyledButton,
    Badge,
    Text,
    Group,
    ActionIcon,
    Tooltip,
    rem,
} from '@mantine/core';
import { IconBulb, IconSettings, IconUsers, IconApps, IconPlus } from '@tabler/icons-react';
import { UserButton } from '../UserButton/UserButton';
import classes from './NavbarSearch.module.css';
import { DashboardSpotlightStarterButton, MainSpotlight } from '../Spotlight/Spotlight';

const links = [
    { icon: IconBulb, label: 'Activity', notifications: 3 },
    { icon: IconUsers, label: 'Friends', notifications: 4 },
    { icon: IconApps, label: 'Library', },
    { icon: IconSettings, label: 'Settings' },
];

const communities = [
    { emoji: '👍', label: 'Sales' },
    { emoji: '🚚', label: 'Deliveries' },
    { emoji: '💸', label: 'Discounts' },
    { emoji: '💰', label: 'Profits' },
    { emoji: '✨', label: 'Reports' },
    { emoji: '🛒', label: 'Orders' },
    { emoji: '📅', label: 'Events' },
    { emoji: '🙈', label: 'Debts' },
    { emoji: '💁‍♀️', label: 'Customers' },
];

export function Navbar() {
    const mainLinks = links.map((link) => (
        <UnstyledButton key={link.label} className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
                <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
                <span>{link.label}</span>
            </div>
            {link.notifications && (
                <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                    {link.notifications}
                </Badge>
            )}
        </UnstyledButton>
    ));

    const communityLinks = communities.map((community) => (
        <a
            href="#"
            onClick={(event) => event.preventDefault()}
            key={community.label}
            className={classes.communityLink}
        >
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{community.emoji}</span>{' '}
            {community.label}
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.section}>
                <UserButton />
            </div>

            <Group mb="sm" className={classes.spotlightbtn}>
                <DashboardSpotlightStarterButton />
            </Group>

            <div className={classes.section}>
                <div className={classes.mainLinks}>{mainLinks}</div>
            </div>

            <div className={classes.section}>
                <Group className={classes.communitiesHeader} justify="space-between">
                    <Text size="xs" fw={500} c="dimmed">
                        Communities
                    </Text>
                    <Tooltip label="Create Community" withArrow position="right">
                        <ActionIcon variant="default" size={18}>
                            <IconPlus style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                </Group>
                <div className={classes.communities}>{communityLinks}</div>
            </div>
        </nav>
    );
}