import { types } from '../../../data/animals'
import FilterSelect from './FilterSelect'

function FilterType() {
    function handleChange(searchParams: URLSearchParams) {
        searchParams.delete('breed')
    }

    return (
        <FilterSelect
            filterField="type"
            options={types}
            placeholder="Select type..."
            onChange={handleChange}
        />
    )
}

export default FilterType
