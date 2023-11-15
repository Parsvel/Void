import cx from 'clsx';
import { Box, Text, Group, rem } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import classes from './TableOfContents.module.css';

const links = [
    { label: 'Discover', link: '#discover', order: 1 },
    { label: 'Games', link: '#discover/games', order: 2 },
    { label: 'Communities', link: '#discover/social', order: 2 },
    { label: 'Following', link: '#following', order: 1 },
    { label: 'With other overlays', link: '#overlays', order: 1 },
    { label: 'Manage focus', link: '#focus', order: 1 },
    { label: 'Examples', link: '#1', order: 1 },
    { label: 'Show on focus', link: '#2', order: 2 },
    { label: 'Show on hover', link: '#3', order: 2 },
    { label: 'With form', link: '#4', order: 2 },
];

const active = '#discover';

export function SideList() {
    const items = links.map((item) => (
        <Box<'a'>
            component="a"
            href={item.link}
            onClick={(event) => event.preventDefault()}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === item.link })}
            style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
        >
            {item.label}
        </Box>
    ));

    return (
        <div>
            <Group mb="md">
                <IconListSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                <Text>Browse</Text>
            </Group>
            {items}
        </div>
    );
}