import {Outlet} from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import {Topbar} from '../components/Topbar';

export function DashboardLayout () {
    return (
        <div className='flex h-screen overflow-hidden bg-background'>

            <Sidebar />

            <div className='flex-1 flex flex-col min-w-0'>

                <Topbar />

                <main className='flex-1 overflow-y-auto p-6 scroll-smooth'>

                    <Outlet />
                </main>
            </div>
        </div>
    );
}