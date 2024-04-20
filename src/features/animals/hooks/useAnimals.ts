import { useQuery } from '@tanstack/react-query'
import { getAnimals } from '../../../services/apiPetfinder'

export function useAnimals() {
    const { data, isLoading } = useQuery({
        queryKey: ['animals'],
        queryFn: () => getAnimals(),
        staleTime: 1000 * 60 * 2,
    })

    return { data, isLoading }
}
