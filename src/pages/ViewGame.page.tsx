import React, { useState, useEffect } from 'react';
import { Header } from '../components/Headers/DefaultHeader';
import { Footer } from '../components/Footers/GlobalFooter';
import { GeneralAffix } from '../components/Affix/Affix';
import classes from './GamePage.module.css';
import { Group, Card, Image, Text } from '@mantine/core';
import { GameCard } from '../components/Cards/GameViewCard';
import { GameCardSkeleton } from '../components/Skeletons/GameCard';
import { BannerCard } from '../components/Cards/GameViewBannerCard';
import { ViewContent, ViewHeader } from '../components/GamePage/ViewPageContent';

export function ViewGamePage() {
    const [allData, setAllData] = useState({ game: null, studio: null });

    useEffect(() => {
        async function fetchData() {
            let url = window.location.pathname.split('/');
            let gameId = url[3];

            if (window.location.pathname.startsWith('/game/view')) {
                const gameResponse = await fetch(
                    'https://api.playvoid.xyz/fetch/details/gamefromname?id=' + gameId,
                    { mode: 'cors' }
                );
                const gameData = await gameResponse.json();

                if (gameData.data) {
                    const studioResponse = await fetch(
                        'https://api.playvoid.xyz/fetch/details/studio?id=' + gameData.data.studioid,
                        { mode: 'cors' }
                    );
                    const studioData = await studioResponse.json();

                    setAllData({
                        game: gameData.data,
                        studio: studioData.data,
                    });
                }
            }
        }

        fetchData();
    }, []);

    if (!allData.game || !allData.studio) {
        return (
            <div className={classes.main}>
                <Header />
                <GeneralAffix />
                <div className={classes.group}>
                    <div className={classes.left_side}>
                        <GameCardSkeleton />
                    </div>
                    <div className={classes.right_side}>
                        <GameCardSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.main}>
            <Header />
            <GeneralAffix />
            <div className={classes.group}>
                <div className={classes.left_side}>
                    <div className={classes.left_side_content}>
                        <BannerCard data={allData} />
                        <GameCard data={allData} />
                    </div>
                    
                </div>
                <div className={classes.right_side}>
                    <ViewContent data={allData} />
                </div>
            </div>
        </div>
    );
}
