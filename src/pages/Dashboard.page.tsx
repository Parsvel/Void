import { Group, Stack } from '@mantine/core';
import { Header } from '../components/Headers/DefaultHeader';
import { Navbar } from '../components/Navbars/DashboardNavigation';
import { UserStats } from '../components/Stats/UserStats';
import classes from './Dashboard.module.css';
import { SideList } from '../components/List/DashboardSideList';
import { GameCard } from '../components/Cards/GameCard';

export function DashboardPage() {
    return (
        <>
            <Header />
            <Group style={{ display: 'flex', 'flex-direction': 'row', width: '100%', padding: '0', height: 'calc(100vh - 60px)' }}>
                <Group visibleFrom="md" style={{ height: 'calc(100vh - 60px)', margin: '0' }}>
                    <Navbar />
                </Group>
                <div className={classes.content} style={{ height: 'calc(100vh - 60px)', margin: '0' }}>
                    <Stack>
                        <UserStats />
                        
                    </Stack>
                </div>
            </Group >
        </>
    );
}
