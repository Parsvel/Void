import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Title, Group, Stack, Badge, Button, ActionIcon, Avatar, Modal, UnstyledButton, Skeleton, CopyButton, Tooltip, rem, Popover } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronRight, IconCopy, IconCheck, IconShare2 } from '@tabler/icons-react';
import classes from './BadgeCard.module.css';
import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

const badgeList = [
    { id: 'flash', emoji: '🎮', label: 'Flash' },
    { id: 'flash', emoji: '🎮', label: 'HTML5' },
    { id: 'puzzle', emoji: '🧩', label: 'Puzzle' },
];

const features = badgeList

function createBadgeList(tags: any) {
    let badges = tags.split(',')
    let badgesList: any = []
    badges.forEach((badge: any) => {
        if (badgeList.some(e => e.id === badge)) {
            badgesList.push(badgeList.find(vendor => vendor['id'] === badge))
        }
    })
    return badgesList
}

export function GameCard(data: any) {
    const [imageLoading, setImageLoading] = useState(true);
    const [opened, { open, close }] = useDisclosure(false);
    const [popoverOpened, setPopoverOpened] = useState(false);

    const handleTouchStart = () => {
        setPopoverOpened(true);
    };

    const handlePopoverClose = () => {
        setPopoverOpened(false);
    };


    function navigateTo(url: string) {
        window.location.href = url;
    }

    function ShareModal() {

        return (
            <>
                <Modal opened={opened} onClose={close} transitionProps={{ transition: 'scale' }} title="Share Game" centered>
                    <CopyButton value={data.data.game.id}>
                        {({ copied, copy }) => (
                            <Button color={copied ? 'teal' : 'orange'} onClick={copy}>
                                {copied ? 'Copied ID' : 'Copy ID'}
                            </Button>
                        )}
                    </CopyButton>
                </Modal>
            </>
        );
    }

    return (
        <>
            <ShareModal />
            <Card withBorder radius="md" p="md" className={classes.card}>

                <Card.Section className={classes.section}>
                    <Group justify="space-between" mt="xs">
                        <Group>
                            <Avatar variant="filled" radius="sm" src={'https://cdn.playvoid.xyz/data/gameContent/' + data.data.game.id.slice(4) + '/images/PrimaryIcon.png'} />
                            <div>
                                <Title order={2}>
                                    {data.data.game.name}
                                </Title>
                                <Text size="sm">{data.data.game.version}</Text>
                            </div>
                        </Group>
                        <Tooltip label={'Share Game'} position="right">
                            <ActionIcon variant="default" aria-label="Share" onClick={open}>
                                <IconShare2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                </Card.Section>

                <Card.Section className={classes.userSection}>
                    <UnstyledButton className={classes.user} onClick={() => navigateTo('/studio/view/' + data.data.studio.primename)}>
                        <Group>
                            <Avatar
                                src={'https://cdn.playvoid.xyz/data/studioContent/' + data.data.studio.id.slice(4) + '/images/PrimaryIcon.png'}
                                radius="xl"
                            />

                            <div style={{ flex: 1 }}>
                                <Text size="sm" fw={500}>
                                    {data.data.studio.name}
                                </Text>

                                <Text c="dimmed" size="xs">
                                    {data.data.studio.primename}
                                </Text>
                            </div>

                            <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
                        </Group>
                    </UnstyledButton>
                </Card.Section>

                <Card.Section className={classes.section}>
                    <Text mt="md" className={classes.label} c="dimmed">
                        About This Game
                    </Text>
                    <Text fz="sm" mt="xs" className={classes.description}>
                        {data.data.game.short_description}
                    </Text>
                </Card.Section>

                <Card.Section className={classes.section}>
                    <Group gap={7} mt="md">
                        {createBadgeList(data.data.game.tags).map((badge: any) => (
                            <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
                                {badge.label}
                            </Badge>
                        ))}
                    </Group>
                </Card.Section>

                <Group mt="xs">
                    <BrowserView style={{ flex: 1, width: '100%' }}>
                        <Button radius="md" style={{ width: '100%' }} onClick={() => navigateTo('/game/play/' + data.data.game.primename)}>
                            Play
                        </Button>
                    </BrowserView>
                    <MobileView style={{ flex: 1, width: '100%' }}>
                        <Popover width={200} opened={popoverOpened} onClose={handlePopoverClose} position="bottom" shadow="md">
                            <Popover.Target>
                                <div onMouseDown={handleTouchStart}>
                                    <Button radius="md" style={{ width: '100%' }} onClick={() => navigateTo('/game/play/' + data.data.game.primename)} className={classes.disabled} disabled>
                                        Play
                                    </Button>
                                </div>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Text size="xs">You cannot play games on mobile yet :(</Text>
                            </Popover.Dropdown>
                        </Popover>
                    </MobileView>
                    <ActionIcon variant="default" radius="md" size={36}>
                        <IconHeart className={classes.like} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Card>
        </>
    );
}