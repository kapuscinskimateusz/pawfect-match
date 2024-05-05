import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'
import { faMars } from '@fortawesome/free-solid-svg-icons/faMars'
import { faVenus } from '@fortawesome/free-solid-svg-icons/faVenus'
import LazyImage from '../../../components/ui/LazyImage'

function AnimalListItem({ animal }) {
    const { name, photos, breeds, gender } = animal

    return (
        <li className="overflow-hidden rounded-3xl shadow-md">
            <Link to="/" className="flex h-full flex-col">
                <div className="flex aspect-square flex-shrink-0 items-center justify-center overflow-hidden bg-gray-300">
                    {photos.length > 0 ? (
                        <LazyImage
                            src={photos[0].full}
                            alt={`${name}'s photo`}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <FontAwesomeIcon icon={faPaw} size="xl" />
                    )}
                </div>

                <div className="flex flex-grow items-center justify-center bg-white p-4">
                    <div className="text-center">
                        <div>
                            <span className="font-bold">{name}</span>

                            <span className="ml-2">
                                {gender === 'Male' ? (
                                    <FontAwesomeIcon
                                        icon={faMars}
                                        className="text-blue-500"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faVenus}
                                        className="text-pink-500"
                                    />
                                )}
                            </span>
                        </div>

                        <div className="text-sm">
                            {breeds.secondary ? (
                                <span>
                                    {breeds.primary} & {breeds.secondary}
                                </span>
                            ) : (
                                <span>{breeds.primary}</span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default AnimalListItem
