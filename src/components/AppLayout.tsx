import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'

function AppLayout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout
