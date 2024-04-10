import { Link } from 'react-router-dom'
import Logo from './ui/Logo'
import AppNavigation from './AppNavigation'

function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between">
            <Link to="/">
                <Logo />
            </Link>
            <AppNavigation />
        </header>
    )
}

export default AppHeader
