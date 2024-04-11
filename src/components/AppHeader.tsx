import { Link } from 'react-router-dom'
import Logo from './ui/Logo'
import AppNavigation from './AppNavigation'

function AppHeader() {
    return (
        <header className="flex h-16 items-center shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <AppNavigation />
                </div>
            </div>
        </header>
    )
}

export default AppHeader
