import { Card, Image, Text } from '@mantine/core';

export function BannerCard(data: any) {
    return (
        <Card
            shadow="sm"
            padding="xl"
            mb="md"
        >
            <Card.Section>
                <Image
                    src={'https://cdn.playvoid.xyz/data/gameContent/' + data.data.game.id.slice(4) + '/images/CardBanner.png'}
                    h={160}
                    alt="No way!"
                />
            </Card.Section>
        </Card>
    );
}