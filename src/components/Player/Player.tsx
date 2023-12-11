import classes from './Player.module.css';

export function Player(data: any) {
    return (
        <div>
            <iframe src={'https://cdn.playvoid.xyz/data/gameContent/' + data.data.game.id.slice(4) + '/images/CardBanner.png'} sandbox="allow-same-origin" className={classes.frame}></iframe>
        </div>
    );
}