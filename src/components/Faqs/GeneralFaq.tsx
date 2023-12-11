import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from './image.svg';
import classes from './FaqWithImage.module.css';

const placeholder =
    "The man in the corner doesn't know I have a gun 😐😐😐😐";

export function GeneralFaq() {
    return (
        <div className={classes.wrapper} id="faq">
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Image src={image} alt="Frequently Asked Questions" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>When will Void Stable release?</Accordion.Control>
                                <Accordion.Panel>We are shooting for at the latest, October 2024. But currently we are on track to have a public stable avaliable as early as Febuary 2024f.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="another-account">
                                <Accordion.Control>How do I join the early devs program?</Accordion.Control>
                                <Accordion.Panel>Currently there is nothing avaliable at this time, but make sure you join the discord and get the "Developer" role so you can know and be put straight in.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="newsletter">
                                <Accordion.Control>What kind of games are going to avaliable?</Accordion.Control>
                                <Accordion.Panel>At the moment, only Flash and HTML5 games because that is all our team has the resources to work on. Later we are planning to port other kinds of games.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    How can I support the developers?
                                </Accordion.Control>
                                <Accordion.Panel>We have a support page that you can donate to! If you want to work on the project, join the discord and apply. We can always use a helping hand!</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}