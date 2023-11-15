import { Group, Stack, SimpleGrid } from '@mantine/core';
import { Header } from '../components/Headers/DefaultHeader';
import { Navbar } from '../components/Navbars/DashboardNavigation';
import { UserStats } from '../components/Stats/UserStats';
import classes from './Dashboard.module.css';
import { SideList } from '../components/List/DashboardSideList';
import { GameCard } from '../components/Cards/GameCard';

export function DashboardPage() {
    return (
        <div className={classes.main}>
            <Header />
            <Group style={{ display: 'flex', 'flex-direction': 'row', width: '100%', padding: '0', height: '100%', overflow: 'hidden' }}>
                <div style={{ height: 'calc(100vh - 60px)', margin: '0' }}>
                    <Navbar />
                </div>
                <div className={classes.content} style={{ height: 'calc(100vh - 60px)', margin: '0'}}>
                    <Stack>
                        <UserStats />
                        <div className={classes.group}>
                            <div className={classes.left_side}>
                                <SimpleGrid cols={1}>
                                    <GameCard />
                                    <GameCard />
                                    <GameCard />
                                    <GameCard />
                                </SimpleGrid>
                            </div>
                            <div className={classes.right_side}>
                                <SideList />
                            </div>
                        </div>
                    </Stack>
                </div>
            </Group >
        </div>
    );
}
