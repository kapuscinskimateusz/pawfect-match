import { Outlet, useNavigation } from 'react-router-dom'
import AppHeader from './AppHeader'
import Spinner from './ui/Spinner'

function AppLayout() {
    const navigation = useNavigation()

    const isLoading = navigation.state === 'loading'

    return (
        <div className="flex min-h-screen flex-col">
            <AppHeader />
            <main className="relative flex-grow">
                <div className="container mx-auto px-4">
                    {isLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </div>
            </main>
        </div>
    )
}

export default AppLayout
