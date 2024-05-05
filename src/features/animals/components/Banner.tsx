import { useSearchParams } from 'react-router-dom'
import { types } from '../../../data/animals'
import Heading from '../../../components/ui/Heading'

function Banner() {
    const [searchParams] = useSearchParams()

    const filterTypeValue = searchParams.get('type')

    const heading = `${types.find((t) => t.value === filterTypeValue)?.label} available for adoption`

    return (
        <header className="flex h-48 items-center justify-center rounded-3xl bg-gradient-to-r from-madang-500 via-madang-700 to-madang-500 text-madang-50">
            <Heading type="h1">{heading}</Heading>
        </header>
    )
}

export default Banner
