interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
}

const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-3',
    lg: '',
}

const colors = {
    primary: 'border-madang-600',
    secondary: 'border-gray-300',
}

function Spinner(props: SpinnerProps) {
    const { size = 'md', color = 'primary' } = props

    return (
        <span
            className={`inline-block animate-spin rounded-full border-b-transparent ${sizes[size]} ${colors[color]}`}
        ></span>
    )
}

export default Spinner
