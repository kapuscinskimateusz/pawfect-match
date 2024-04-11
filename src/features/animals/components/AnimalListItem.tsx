import { Link } from 'react-router-dom'

function AnimalListItem({ animal }) {
    const { name, photos, breeds, age, gender } = animal

    return (
        <li className="overflow-hidden rounded-2xl shadow-md">
            <Link to="/" className="flex h-full flex-col">
                <div className="aspect-square shrink-0 overflow-hidden">
                    {photos.length > 0 && (
                        <img
                            src={photos[0].small}
                            alt={`${name}'s photo`}
                            className="h-full w-full object-cover"
                        />
                    )}
                </div>

                <div className="flex grow flex-col items-start bg-white p-4">
                    <div className="text-xl font-bold">{name}</div>
                    <div className="grow">
                        {breeds.secondary ? (
                            <span>
                                {breeds.primary} & {breeds.secondary}
                            </span>
                        ) : (
                            <span>{breeds.primary}</span>
                        )}
                    </div>
                    <div className="rounded-full border border-madang-200 bg-madang-100 px-3 py-1">
                        {age}, {gender}
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default AnimalListItem
