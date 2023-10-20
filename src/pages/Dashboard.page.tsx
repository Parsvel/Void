import { Group } from '@mantine/core';
import { Header } from '../components/Headers/DefaultHeader';
import { Navbar } from '../components/Navbars/DashboardNavigation';
import { UserStats } from '../components/Stats/UserStats';
import classes from './Dashboard.module.css';

export function DashboardPage() {
    return (
        <>
            <Header />
            <Group style={{ display: 'flex', 'flex-direction': 'row', width: '100%', padding: '0' }}>
                <Group visibleFrom="md">
                    <Navbar />
                </Group>
                <div className={classes.content} style={{ height: '100vh', margin: '0' }}>
                    <UserStats />
                </div>
            </Group >
        </>
    );
}
