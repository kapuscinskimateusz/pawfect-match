import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { sitemap } from '../../sitemap'
import { useOpenClose } from '../../hooks/useOpenClose'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import IconButton from './IconButton'

function MobileMenu() {
    const { isOpen, handleOpen, handleClose } = useOpenClose(false)
    const asideRef = useOutsideClick(handleClose)

    return (
        <>
            <IconButton onClick={handleOpen}>
                <FontAwesomeIcon icon={faBars} />
            </IconButton>

            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-50">
                        <aside
                            ref={asideRef}
                            className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-white"
                        >
                            <div className="flex h-20 items-center justify-end px-4">
                                <IconButton onClick={handleClose}>
                                    <FontAwesomeIcon icon={faClose} />
                                </IconButton>
                            </div>

                            <nav>
                                <ul className="p-4">
                                    {sitemap.map((item) => (
                                        <li key={item.path}>
                                            <NavLink
                                                to={item.path}
                                                className="block px-5 py-2.5"
                                                onClick={handleClose}
                                            >
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                    </div>,
                    document.body
                )}
        </>
    )
}

export default MobileMenu
