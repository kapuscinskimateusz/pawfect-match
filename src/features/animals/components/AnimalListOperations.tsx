import { age, gender, sizes } from '../../../data/animals'
import Filters from './Filters'
import FilterBreed from './FilterBreed'
import FilterType from './FilterType'
import FilterSelect from './FilterSelect'

function AnimalListOperations() {
    return (
        <Filters>
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
        </Filters>
    )
}

export default AnimalListOperations
