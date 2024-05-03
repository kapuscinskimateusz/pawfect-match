import { ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import Heading from '../../../components/ui/Heading'
import Button from '../../../components/ui/Button'

interface FiltersProps {
    children: ReactNode
}

function Filters({ children }: FiltersProps) {
    const [, setSearchParams] = useSearchParams()

    function handleClearAll() {
        setSearchParams({ type: 'dog' })
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <Heading type="h2">Filters</Heading>
                <Button variant="outlined" onClick={handleClearAll}>
                    Clear all filters
                </Button>
            </div>

            <div className="flex flex-col gap-4">{children}</div>
        </div>
    )
}

export default Filters
