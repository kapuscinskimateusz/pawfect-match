import { types, age, sizes, gender } from '../../../data/animals'
import FilterSelect from './FilterSelect'

function AnimalListOperations() {
    return (
        <div className="flex flex-col gap-3">
            <FilterSelect filterField="type" options={types} />
            <FilterSelect filterField="age" options={age} isMulti />
            <FilterSelect filterField="size" options={sizes} isMulti />
            <FilterSelect filterField="gender" options={gender} isMulti />
        </div>
    )
}

export default AnimalListOperations
