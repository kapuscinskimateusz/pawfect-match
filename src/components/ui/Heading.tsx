import { ReactNode, createElement } from 'react'

interface HeadingProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode
    className?: string
}

function Heading({ type, children, className = '' }: HeadingProps) {
    const types = {
        h1: 'mb-4 text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl',
        h2: 'text-4xl font-bold',
        h3: 'text-3xl font-bold',
        h4: 'text-2xl font-bold',
        h5: 'text-xl font-bold',
        h6: 'text-lg font-bold',
    }

    const classes = `${types[type]} ${className}`

    return createElement(type, { className: classes }, children)
}

export default Heading
