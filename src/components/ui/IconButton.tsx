import { ReactNode } from 'react'

interface IconButtonProps {
    children: ReactNode
    disabled?: boolean
    onClick?: () => void
}

function IconButton(props: IconButtonProps) {
    const { children, disabled = false, onClick = () => {} } = props

    return (
        <button
            type="button"
            className="h-10 w-10 rounded-full text-gray-950 transition-colors hover:bg-gray-100 active:bg-gray-200 disabled:bg-transparent disabled:text-gray-400"
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default IconButton
