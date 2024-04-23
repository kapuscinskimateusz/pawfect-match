import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAnimals } from '../../../services/apiPetfinder'

export function useAnimals() {
    const [searchParams] = useSearchParams()

    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

    const { data, isLoading } = useQuery({
        queryKey: ['animals', page],
        queryFn: () => getAnimals({ page }),
        staleTime: 1000 * 60 * 2,
    })

    return { data, isLoading }
}
