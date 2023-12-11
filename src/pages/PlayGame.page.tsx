import React, { useState, useEffect } from 'react';
import { Header } from '../components/Headers/DefaultHeader';
import { Footer } from '../components/Footers/GlobalFooter';
import { GeneralAffix } from '../components/Affix/Affix';
import classes from '../General.module.css';
import { Group } from '@mantine/core';
import { GameCard } from '../components/Cards/GameViewCard';
import { GameCardSkeleton } from '../components/Skeletons/GameCard';
import { Player } from '../components/Player/Player';
import { Skeleton, Button } from '@mantine/core';
import { GameHeader } from '../components/Player/GameTitle';

export function PlayGamePage() {
    const [allData, setAllData] = useState({ game: null, studio: null });

    useEffect(() => {
        async function fetchData() {
            let url = window.location.pathname.split('/');
            let gameId = url[3];

            if (window.location.pathname.startsWith('/game/play')) {
                const gameResponse = await fetch(
                    'https://badcarrot.playvoid.xyz/fetch/details/gamefromname?id=' + gameId,
                    { mode: 'cors' }
                );
                const gameData = await gameResponse.json();

                if (gameData.data) {
                    const studioResponse = await fetch(
                        'https://badcarrot.playvoid.xyz/fetch/details/studio?id=' + gameData.data.studioid,
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
                    <div style={{ width: '100%', height: '550px' }}>
                        <Skeleton>
                        <span style={{ paddingTop: '550px' }}></span>
                        </Skeleton>
                    </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className={classes.main}>
            <Header />
            <GeneralAffix />
            <Player data={allData} />
            <GameHeader data={allData} />
            <Footer />
        </div>
    );
}
