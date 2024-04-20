import { useState } from 'react'

export function useOpenClose(defaultValue: boolean) {
    const [isOpen, setIsOpen] = useState(defaultValue)

    function handleOpen() {
        setIsOpen(true)
    }

    function handleClose() {
        setIsOpen(false)
    }

    return { isOpen, handleOpen, handleClose }
}
