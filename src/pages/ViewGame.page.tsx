import { Header } from '../components/Headers/DefaultHeader';
import { Footer } from '../components/Footers/GlobalFooter';
import { GeneralAffix } from '../components/Affix/Affix';
import classes from '../General.module.css';
import { Group } from '@mantine/core';
import { GameCard } from '../components/Cards/GameViewCard';

let url = window.location.pathname.split('/')
let gameId = url[3]

async function getGame() {
    if (window.location.pathname.startsWith('/game/view')) {
        const response = await fetch('https://badcarrot.playvoid.xyz/fetch/details/gamefromname?id=' + gameId, { mode: 'cors' });

        return response.json();
    } else {
        return {
            data: {}
        }
    }
}

let gameData = await getGame()
let game = gameData.data

async function getStudioDetails() {
    if (window.location.pathname.startsWith('/game/view')) {
        const response = await fetch('https://badcarrot.playvoid.xyz/fetch/details/studio?id=' + game.studioid, { mode: 'cors' });

        return response.json();
    } else {
        return {
            data: {}
        }
    }
}

let studioData = await getStudioDetails()
let studio = studioData.data

let allData = {
    game: game,
    studio: studio
}

export function ViewGamePage() {
    return (
        <div className={classes.main}>
            <Header />
            <GeneralAffix />
            <Group>
                <div style={{ margin: '1.5rem', width: '25%' }}>
                    <GameCard data={allData} />
                </div>
            </Group>
            <Footer />
        </div>
    );
}
