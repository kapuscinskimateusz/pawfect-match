import { useBreeds } from '../hooks/useBreeds'
import FilterSelect from './FilterSelect'

function FilterBreed() {
    const { breeds: breedsApi, isLoading } = useBreeds()

    const breeds =
        breedsApi?.breeds?.map((breed) => ({
            value: breed.name,
            label: breed.name,
        })) || []

    return (
        <FilterSelect
            filterField="breed"
            options={isLoading ? [] : breeds}
            placeholder="Select breed..."
            isMulti
            isSearchable
            isLoading={isLoading}
        />
    )
}

export default FilterBreed
