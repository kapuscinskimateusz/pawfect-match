import { useAnimals } from '../hooks/useAnimals'
import Spinner from '../../../components/ui/Spinner'
import Pagination from '../../../components/ui/Pagination'
import AnimalListItem from './AnimalListItem'
import Alert from '../../../components/ui/Alert'

function AnimalList() {
    const { data, isLoading } = useAnimals()

    if (isLoading) return <Spinner />

    const { animals, pagination } = data

    return (
        <div className="flex flex-col gap-4">
            {animals.length > 0 ? (
                <ul className="grid grid-cols-4 gap-4">
                    {animals.map((animal) => (
                        <AnimalListItem key={animal.id} animal={animal} />
                    ))}
                </ul>
            ) : (
                <Alert type="info" message="No options" />
            )}

            <Pagination {...pagination} />
        </div>
    )
}

export default AnimalList
