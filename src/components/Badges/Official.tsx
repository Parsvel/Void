import { Badge, Group, rem } from '@mantine/core';
import { IconCircleCheckFilled } from '@tabler/icons-react';

export function OfficialBadge() {
    const icon = <IconCircleCheckFilled style={{ width: rem(12), height: rem(12) }} />;
    return (
        <Group>
            <Badge leftSection={icon}>Official</Badge>
        </Group>
    );
}