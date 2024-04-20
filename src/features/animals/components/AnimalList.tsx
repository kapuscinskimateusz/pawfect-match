import Spinner from '../../../components/ui/Spinner'
import { useAnimals } from '../hooks/useAnimals'
import AnimalListItem from './AnimalListItem'

function AnimalList() {
    const { data, isLoading } = useAnimals()

    if (isLoading) return <Spinner />

    const { animals } = data

    return (
        <ul className="grid grid-cols-4 items-start gap-4">
            {animals.map((animal) => (
                <AnimalListItem key={animal.id} animal={animal} />
            ))}
        </ul>
    )
}

export default AnimalList
