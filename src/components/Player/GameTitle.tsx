import { Autocomplete, Group, Burger, rem, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconHeart } from '@tabler/icons-react';
import classes from './HeaderSearch.module.css';

export function GameHeader(data: any) {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <h2>{data.data.game.name}</h2>
                    <ActionIcon variant="default" aria-label="Settings">
                        <IconHeart className={classes.like} style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Group>

                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                        <a
                            href={"/game/view/"+data.data.game.primename}
                            className={classes.link}
                        >
                            Store Page
                        </a>
                        <a
                            href={"/game/view/" + data.data.game.primename}
                            className={classes.link}
                        >
                            Community
                        </a>
                    </Group>
                </Group>
            </div>
        </header>
    );
}