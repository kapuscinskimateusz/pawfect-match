import { age, sizes, gender } from '../../../data/animals'
import FilterType from './FilterType'
import FilterBreed from './FilterBreed'
import FilterSelect from './FilterSelect'

function AnimalListOperations() {
    return (
        <div className="flex flex-col gap-3">
            <FilterType />
            <FilterBreed />
            <FilterSelect
                filterField="age"
                options={age}
                placeholder="Select age..."
                isMulti
            />
            <FilterSelect
                filterField="size"
                options={sizes}
                placeholder="Select size..."
                isMulti
            />
            <FilterSelect
                filterField="gender"
                options={gender}
                placeholder="Select gender..."
                isMulti
            />
        </div>
    )
}

export default AnimalListOperations
