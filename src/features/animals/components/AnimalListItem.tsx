import { Link } from 'react-router-dom'

function AnimalListItem({ animal }) {
    const { name, photos, breeds, age } = animal

    return (
        <li className="overflow-hidden rounded-2xl shadow-md">
            <Link to="/">
                <div className="aspect-square">
                    {photos.length > 0 && (
                        <img
                            src={photos[0].small}
                            alt={`${name}'s photo`}
                            className="h-full w-full object-cover"
                        />
                    )}
                </div>

                <div className="h-full bg-white p-4">
                    <div>{name}</div>
                    {breeds.secondary ? (
                        <div>
                            {breeds.primary} & {breeds.secondary}
                        </div>
                    ) : (
                        <div>{breeds.primary}</div>
                    )}
                    <div>{age}</div>
                </div>
            </Link>
        </li>
    )
}

export default AnimalListItem
