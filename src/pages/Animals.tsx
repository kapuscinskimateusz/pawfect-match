import Banner from '../features/animals/components/Banner'
import AnimalList from '../features/animals/components/AnimalList'
import AnimalListOperations from '../features/animals/components/AnimalListOperations'

function Animals() {
    return (
        <div className="grid gap-8">
            <Banner />

            <div className="grid grid-cols-3 gap-8 px-4">
                <div>
                    <AnimalListOperations />
                </div>
                <div className="col-span-2">
                    <AnimalList />
                </div>
            </div>
        </div>
    )
}

export default Animals
