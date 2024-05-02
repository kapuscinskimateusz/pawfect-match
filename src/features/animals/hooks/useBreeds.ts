import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { types } from '../../../data/animals'
import { getAnimalBreeds } from '../../../services/apiPetfinder'

export function useBreeds() {
    const [searchParams] = useSearchParams()

    const type = searchParams.get('type') || types[0].value

    const { data: breeds, isLoading } = useQuery({
        queryKey: ['breeds', { type }],
        queryFn: async () => getAnimalBreeds(type),
    })

    return { breeds, isLoading }
}
