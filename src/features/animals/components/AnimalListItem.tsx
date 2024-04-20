import { Link } from 'react-router-dom'
import LazyImage from '../../../components/ui/LazyImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'

function AnimalListItem({ animal }) {
    const { name, photos, breeds, age, gender } = animal

    return (
        <li className="overflow-hidden rounded-md shadow-md">
            <Link to="/">
                <div className="flex aspect-square items-center justify-center bg-madang-200">
                    {photos.length > 0 ? (
                        <LazyImage
                            src={photos[0].full}
                            alt={`${name}'s photo`}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faPaw}
                            className="h-6 w-6 text-madang-600"
                        />
                    )}
                </div>

                <div className="p-2.5">
                    <div className="text-lg font-bold">{name}</div>
                    <p>
                        {breeds.primary +
                            `${breeds.secondary ? ` & ${breeds.secondary}` : ''}`}
                    </p>

                    <div className="inline-flex items-center divide-x divide-madang-200 rounded-full border border-madang-200 bg-madang-100 px-2.5 py-1">
                        <span className="pr-2">{age}</span>
                        <span className="pl-2">{gender}</span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default AnimalListItem
