import Heading from '../components/ui/Heading'
import AnimalList from '../features/animals/components/AnimalList'
import AnimalListOperations from '../features/animals/components/AnimalListOperations'

function Animals() {
    return (
        <>
            <Heading type="h1">Animals</Heading>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <AnimalListOperations />
                </div>
                <div className="col-span-2">
                    <AnimalList />
                </div>
            </div>
        </>
    )
}

export default Animals
