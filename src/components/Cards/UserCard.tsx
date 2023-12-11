import { Card, Image, Text, Badge, Button, Group, rem, Avatar } from '@mantine/core';

export function UserCard() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="xs">
                <Group>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/72514113?v=4"
                        radius="xl"
                    />

                    <div style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                            Bastard
                        </Text>

                        <Text c="dimmed" size="xs">
                            WastePanda
                        </Text>
                    </div>
                </Group>

                <Badge color="pink" variant="light">
                    Online
                </Badge>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="orange" fullWidth mt="md" radius="md">
                Profile
            </Button>
        </Card>
    );
}