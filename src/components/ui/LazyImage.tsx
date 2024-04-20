import { useState } from 'react'
import Spinner from './Spinner'

interface LazyImageProps {
    src: string
    alt: string
    className?: string
}

function LazyImage(props: LazyImageProps) {
    const { src, alt, className = '' } = props

    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {isLoading && <Spinner />}

            <img
                src={src}
                alt={alt}
                className={isLoading ? 'hidden' : className}
                onLoad={() => setIsLoading(false)}
            />
        </>
    )
}

export default LazyImage
