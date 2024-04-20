interface SpinnerProps {
    size?: 'md' | 'lg'
    color?: 'primary' | 'secondary'
}

function Spinner(props: SpinnerProps) {
    const { size = 'lg', color = 'primary' } = props

    const baseClasses =
        'inline-block animate-spin rounded-full border-b-transparent'

    const sizes = {
        md: 'w-6 h-6 border-3',
        lg: 'w-12 h-12 border-5',
    }

    const colors = {
        primary: 'border-madang-500',
        secondary: 'border-black',
    }

    const classes = `${baseClasses} ${sizes[size]} ${colors[color]}`

    return <span className={classes}></span>
}

export default Spinner
