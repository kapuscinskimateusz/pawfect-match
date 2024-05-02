import { useBreeds } from '../hooks/useBreeds'
import FilterSelect from './FilterSelect'

function FilterBreed() {
    const { breeds: breedsApi, isLoading } = useBreeds()

    if (isLoading) return

    const breeds = breedsApi.breeds.map((breed) => ({
        value: breed.name,
        label: breed.name,
    }))

    return (
        <FilterSelect
            filterField="breed"
            options={breeds}
            placeholder="Select breed..."
            isMulti
            isSearchable
        />
    )
}

export default FilterBreed
