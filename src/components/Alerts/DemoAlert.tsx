import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function DemoAlert() {
    const icon = <IconInfoCircle />;
    return (
        <Alert variant="light" color="yellow" title="" icon={icon}>
            This is a UI Demo only. Therefore, none of the functions will work properly if at all.
        </Alert>
    );
}