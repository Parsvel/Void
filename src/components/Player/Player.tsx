import classes from './Player.module.css';

export function Player(data: any) {
    return (
        <div className={classes.wrapper}>
            <iframe src={'https://player.playvoid.xyz/player/' + data.data.game.id} sandbox="allow-scripts allow-popups allow-same-origin" className={classes.frame}></iframe>
        </div>
    );
}