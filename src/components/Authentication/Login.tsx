import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Title,
    Transition,
    rem,
    Affix
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import classes from './AuthenticationImage.module.css';
import { IconArrowBackUp } from '@tabler/icons-react';

export function LoginForm() {
    const queryParams = new URLSearchParams(window.location.search)
    const ref = queryParams.get("ref")

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            username: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    function goBack () {
        history.back()
    }

    window.onload = function () {
        if (ref == 'register') {
            toggle()
        }
    };

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={20}>
                    Welcome back to Void!
                </Title>
                <Text fw={500} ta="center">
                    Continue with
                </Text>

                <Group grow mb="md" mt="md">
                    <GoogleButton radius="xl">Google</GoogleButton>
                    <TwitterButton radius="xl">Twitter</TwitterButton>
                </Group>

                <Divider label="Or continue with username" labelPosition="center" my="lg" />

                <form onSubmit={form.onSubmit(() => { })}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                required
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Username"
                            placeholder="johndoe@kropp.com"
                            value={form.values.username}
                            onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                            error={form.errors.username && 'Invalid username'}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                            radius="md"
                        />

                        {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>

                    <Group justify="space-between" mt="xl">
                        <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit">
                            {upperFirst(type)}
                        </Button>
                    </Group>
                </form>
                <Affix position={{ bottom: 20, left: 20 }}>
                    <Button
                        leftSection={<IconArrowBackUp style={{ width: rem(16), height: rem(16) }} />}
                        onClick={() => goBack()}
                    >
                        Go back
                    </Button>
                </Affix>
            </Paper>
        </div>
    );
}