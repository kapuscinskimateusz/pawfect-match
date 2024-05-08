import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAnimals } from '../../../services/apiPetfinder'

export function useAnimals() {
    const [searchParams] = useSearchParams()

    const filters = {
        type: searchParams.get('type'),
        breed: searchParams.getAll('breed'),
        age: searchParams.getAll('age'),
        size: searchParams.getAll('size'),
        gender: searchParams.getAll('gender'),
    }

    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

    const { data: animals, isLoading } = useQuery({
        queryKey: ['animals', filters, { page }],
        queryFn: () => getAnimals(filters, page),
        staleTime: 1000 * 60 * 2,
    })

    return { animals, isLoading }
}
