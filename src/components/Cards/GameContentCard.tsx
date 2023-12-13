import { Card, Image, Text, Title } from '@mantine/core';
import classes from './ContentCard.module.css';
import MarkdownView from 'react-showdown';

export function GameContentCard(data:any) {
    console.log(data)
    return (
        <Card
            shadow="sm"
        >
            <Text size="sm">
                <MarkdownView
                    markdown={data.data.data.game.description}
                />
            </Text>
        </Card>
    );
}