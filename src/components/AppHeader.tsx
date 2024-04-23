import AppNavigation from './AppNavigation'

function AppHeader() {
    return (
        <header className="flex h-16 items-center shadow-md">
            <div className="container mx-auto px-4">
                <AppNavigation />
            </div>
        </header>
    )
}

export default AppHeader
