import { NavLink } from 'react-router-dom'
import { sitemap } from '../sitemap'
import Logo from './ui/Logo'
import Modal from './ui/Modal'
import Button from './ui/Button'

function AppNavigation() {
    return (
        <nav className="flex items-center justify-between">
            <Logo />

            <ul className="flex items-center divide-x">
                {sitemap.map((el) => (
                    <li key={el.path} className="px-3 first:pl-0 last:pr-0">
                        <NavLink to={el.path}>{el.label}</NavLink>
                    </li>
                ))}
            </ul>

            <Modal>
                <Modal.Open>
                    <Button>Sign in</Button>
                </Modal.Open>
                <Modal.Window>test</Modal.Window>
            </Modal>
        </nav>
    )
}

export default AppNavigation
