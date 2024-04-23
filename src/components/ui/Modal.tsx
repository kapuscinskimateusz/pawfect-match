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
import Button from './Button'

interface ModalContextValue {
    isOpen: boolean
    handleOpen: () => void
    handleClose: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

function Modal({ children }: { children: ReactNode }) {
    const { isOpen, handleOpen, handleClose } = useOpenClose(false)

    return (
        <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>
            {children}
        </ModalContext.Provider>
    )
}

function Open({ children }: { children: ReactElement }) {
    const modalContext = useContext(ModalContext)
    if (!modalContext) {
        throw new Error('Open must be used in the ModalContext.Provider.')
    }
    const { handleOpen } = modalContext

    return cloneElement(children, { onClick: handleOpen })
}

function Window({ children }: { children: ReactNode }) {
    const modalContext = useContext(ModalContext)
    if (!modalContext) {
        throw new Error('Window must be used in the ModalContext.Provider.')
    }
    const { isOpen, handleClose } = modalContext

    const windowRef = useOutsideClick(handleClose)

    return (
        isOpen &&
        createPortal(
            <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-50">
                <div
                    ref={windowRef}
                    className="mx-auto mt-24 max-w-md rounded-md bg-white p-4"
                >
                    <div className="text-right">
                        <Button onClick={handleClose}>
                            <FontAwesomeIcon icon={faClose} />
                        </Button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>,
            document.body
        )
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
