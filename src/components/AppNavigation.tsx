import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
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

            <div className="flex items-center gap-2">
                <Button isDisabled>
                    <FontAwesomeIcon icon={faHeart} />
                </Button>

                <Modal>
                    <Modal.Open>
                        <Button>Sign in</Button>
                    </Modal.Open>
                    <Modal.Window>test</Modal.Window>
                </Modal>
            </div>
        </nav>
    )
}

export default AppNavigation
