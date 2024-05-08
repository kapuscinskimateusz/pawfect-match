import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

function AppLayout() {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex min-h-screen flex-col">
                    <AppHeader />
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default AppLayout
