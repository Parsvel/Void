import {
    Autocomplete,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { Logo } from '../Logos/MainLogo';
import { useDisclosure } from '@mantine/hooks';
import { MainSpotlight, SpotlightStarterButton } from '../Spotlight/Spotlight';
import { GlobalDrawer } from '../Drawers/GlobalDrawer';
import {
    IconRosette,
    IconHexagonLetterF,
    IconRun,
    IconUsers,
    IconDeviceTvOld,
    IconBrandHtml5,
    IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
    {
        icon: IconHexagonLetterF,
        title: 'Flash Games',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconBrandHtml5,
        title: 'HTML5 Games',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconRun,
        title: 'Classics',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconDeviceTvOld,
        title: 'Retro Games',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconUsers,
        title: 'Popular Games',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconRosette,
        title: 'Exclusive Games',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box>
            <MainSpotlight />
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Logo />

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="/home" className={classes.link}>
                            Home
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Games
                                        </Box>
                                        <IconChevronDown
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={theme.colors.blue[6]}
                                        />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <Group justify="space-between" px="md">
                                    <Text fw={500}>Games</Text>
                                    <Anchor href="/games" fz="xs">
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Discover More
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Start Playing</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href="#" className={classes.link}>
                            About
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        <SpotlightStarterButton />
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                        <GlobalDrawer />
                    </Group>

                    <Group hiddenFrom="sm">
                        <GlobalDrawer />
                        <Burger opened={drawerOpened} onClick={toggleDrawer} />
                    </Group>
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="VOID"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="/home" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        About
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}