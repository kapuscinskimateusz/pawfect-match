import { useAnimals } from '../hooks/useAnimals'
import Spinner from '../../../components/ui/Spinner'
import Pagination from '../../../components/ui/Pagination'
import Alert from '../../../components/ui/Alert'
import AnimalListItem from './AnimalListItem'

function AnimalList() {
    const { animals: animalsApi, isLoading } = useAnimals()

    if (isLoading) return <Spinner />

    const { animals, pagination } = animalsApi

    return (
        <div className="grid gap-4">
            {animals.length > 0 ? (
                <>
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                        {animals.map((animal) => (
                            <AnimalListItem key={animal.id} animal={animal} />
                        ))}
                    </ul>
                    <Pagination {...pagination} />
                </>
            ) : (
                <Alert type="info" message="No options" />
            )}
        </div>
    )
}

export default AnimalList
