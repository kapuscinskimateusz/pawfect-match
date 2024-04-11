import AnimalListItem from './AnimalListItem'

function AnimalList({ animals }) {
    return (
        <ul className="grid grid-cols-4 gap-4">
            {animals.map((animal) => (
                <AnimalListItem key={animal.id} animal={animal} />
            ))}
        </ul>
    )
}

export default AnimalList
