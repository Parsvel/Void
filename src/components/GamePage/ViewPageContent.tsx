import cx from 'clsx';
import { useState } from 'react';
import {
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
    useMantineTheme,
    Card,
    Image
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
} from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import classes from './HeaderTabs.module.css';
import { GameContentCard } from '../Cards/GameContentCard';

const tabs = [
    'About',
    'Community',
];

export function ViewContent(data:any) {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));

    return (
        <div className={classes.header}>
            <Container size="md">
                <Tabs
                    defaultValue="About"
                    variant="outline"
                    visibleFrom="sm"
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                    <Tabs.Panel value="About" className={classes.content}>
                        <Carousel withIndicators height={250} mb="md">
                            <Carousel.Slide>
                                <Image
                                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                    alt="No way!"
                                    height={250}
                                />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image
                                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                    alt="No way!"
                                    height={250}
                                />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image
                                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                    alt="No way!"
                                    height={250}
                                />
                            </Carousel.Slide>
                        </Carousel>

                        <GameContentCard data={data} />
                    </Tabs.Panel>

                    <Tabs.Panel value="Community" className={classes.content}>
                        Community tab content
                    </Tabs.Panel>
                </Tabs>
            </Container>
        </div>
    );
}