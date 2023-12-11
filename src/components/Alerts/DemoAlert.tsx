import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function DemoAlert() {
    const icon = <IconInfoCircle />;
    return (
        <Alert variant="light" color="yellow" title="" icon={icon} style={{ margin: ".5rem" }}>
            Welcome to Void! You are currently inside of a <em>very high development</em> beta. Congrats and be careful!
        </Alert>
    );
}