import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'filled' | 'outlined'
    wide?: boolean
    isDisabled?: boolean
    onClick?: () => void
}

const variants = {
    filled: 'border-transparent bg-madang-500 text-madang-950 hover:bg-madang-600 active:bg-madang-700 disabled:bg-madang-100 disabled:text-madang-400',
    outlined:
        'border-madang-600 text-madang-600 hover:border-madang-700 hover:text-madang-700 active:border-madang-800 active:text-madang-800 disabled:border-madang-300 disabled:text-madang-300',
}

function Button(props: ButtonProps) {
    const {
        children,
        variant = 'filled',
        wide = false,
        isDisabled = false,
        onClick = () => {},
    } = props

    return (
        <button
            type="button"
            className={[
                'inline-block h-10 rounded-full border px-5 font-semibold transition-colors',
                variants[variant],
                wide ? 'w-full' : '',
            ].join(' ')}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
