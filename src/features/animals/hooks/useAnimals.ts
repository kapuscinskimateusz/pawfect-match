import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAnimals } from '../../../services/apiPetfinder'

export function useAnimals() {
    const [searchParams] = useSearchParams()

    const type = searchParams.get('type')
    const breed = searchParams.getAll('breed')
    const page = searchParams.get('page')

    const { data, isLoading } = useQuery({
        queryKey: ['animals', type, breed, page],
        queryFn: () => getAnimals({ type, breed, page }),
        staleTime: 1000 * 60 * 2,
    })

    return { data, isLoading }
}
