import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    variant?: 'primary'
}

function Card({ children, variant = 'primary' }: CardProps) {
    const variants = {
        primary: 'bg-gradient-to-t from-madang-700 to-madang-500 text-white',
    }

    const classes = `rounded-2xl p-4 ${variants[variant]}`

    return <div className={classes}>{children}</div>
}

export default Card
