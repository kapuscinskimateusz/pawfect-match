import {
    ReactElement,
    ReactNode,
    cloneElement,
    createContext,
    useContext,
} from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { useOpenClose } from '../../hooks/useOpenClose'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import IconButton from './IconButton'

interface ModalContextValue {
    isOpen: boolean
    handleOpen: () => void
    handleClose: () => void
    className: string
}

const ModalContext = createContext<ModalContextValue | null>(null)

function Modal(props: { children: ReactNode; className?: string }) {
    const { children, className = '' } = props

    const { isOpen, handleOpen, handleClose } = useOpenClose(false)

    return (
        <ModalContext.Provider
            value={{ isOpen, handleOpen, handleClose, className }}
        >
            <div className={className}>{children}</div>
        </ModalContext.Provider>
    )
}

function Open(props: { children: ReactElement }) {
    const { children } = props

    const modalContext = useContext(ModalContext)
    if (!modalContext) {
        throw new Error('Open must be used in the ModalContext.Provider.')
    }

    const { handleOpen } = modalContext

    return cloneElement(children, { onClick: handleOpen })
}

function Window(props: { children: ReactNode }) {
    const { children } = props

    const modalContext = useContext(ModalContext)
    if (!modalContext) {
        throw new Error('Window must be used in the ModalContext.Provider.')
    }

    const { isOpen, handleClose, className } = modalContext

    const windowRef = useOutsideClick(handleClose)

    return (
        isOpen &&
        createPortal(
            <div
                className={[
                    'fixed inset-0 backdrop-blur-sm backdrop-brightness-50',
                    className,
                ].join(' ')}
            >
                <div
                    ref={windowRef}
                    className="relative flex h-full flex-col bg-white pt-20"
                >
                    <div className="absolute inset-x-0 top-0 flex h-20 items-center justify-end bg-white px-4 shadow">
                        <IconButton onClick={handleClose}>
                            <FontAwesomeIcon icon={faClose} />
                        </IconButton>
                    </div>

                    <div className="flex-grow overflow-y-auto py-1">
                        <div className="p-4">{children}</div>
                    </div>
                </div>
            </div>,
            document.body
        )
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
