import { Link } from 'react-router-dom'
import Logo from './ui/Logo'
import MobileMenu from './ui/MobileMenu'

function AppHeader() {
    return (
        <header className="flex h-20 items-center justify-between">
            <Link to="/">
                <Logo />
            </Link>

            <MobileMenu />
        </header>
    )
}

export default AppHeader
