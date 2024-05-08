import Banner from '../features/animals/components/Banner'
import AnimalListOperations from '../features/animals/components/AnimalListOperations'
import AnimalList from '../features/animals/components/AnimalList'

function Animals() {
    return (
        <div className="grid gap-4">
            <Banner />
            <div className="grid gap-4 lg:grid-cols-3">
                <div>
                    <AnimalListOperations />
                </div>
                <div className="lg:col-span-2">
                    <AnimalList />
                </div>
            </div>
        </div>
    )
}

export default Animals
