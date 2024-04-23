import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'filled' | 'outlined'
    isDisabled?: boolean
    onClick?: () => void
}

function Button(props: ButtonProps) {
    const {
        children,
        variant = 'filled',
        isDisabled = false,
        onClick = () => {},
    } = props

    const variants = {
        filled: isDisabled
            ? 'border-madang-100 bg-madang-100 text-madang-400'
            : 'border-madang-500 bg-madang-500 text-madang-950 hover:border-madang-600 hover:bg-madang-600 active:border-madang-700 active:bg-madang-700',
        outlined: isDisabled
            ? 'border-madang-300 text-madang-300'
            : 'border-madang-600 text-madang-600 hover:border-madang-700 hover:text-madang-700 active:border-madang-800 active:text-madang-800',
    }

    const classes = [
        'rounded-full border px-5 py-2.5 transition-colors',
        variants[variant],
    ].join(' ')

    return (
        <button
            type="button"
            className={classes}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
