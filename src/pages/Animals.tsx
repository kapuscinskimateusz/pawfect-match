import { useLoaderData } from 'react-router-dom'
import Heading from '../components/ui/Heading'
import Card from '../components/ui/Card'
import AnimalList from '../features/animals/components/AnimalList'

function Animals() {
    const { animals } = useLoaderData()

    return (
        <>
            <Heading type="h1">Animals</Heading>
            <div className="grid grid-cols-3 gap-4">
                <Card>Filters</Card>
                <div className="col-span-2">
                    <AnimalList animals={animals} />
                </div>
            </div>
        </>
    )
}

export default Animals
