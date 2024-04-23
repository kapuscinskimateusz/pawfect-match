import { useSearchParams } from 'react-router-dom'
import Select, { Option, SelectValue } from '../form/Select'

interface FilterSelectProps {
    filterField: string
    options: Option[]
    isMulti?: boolean
    isSearchable?: boolean
}

function FilterSelect(props: FilterSelectProps) {
    const {
        filterField,
        options,
        isMulti = false,
        isSearchable = false,
    } = props

    const [searchParams, setSearchParams] = useSearchParams()

    function handleChange(selectValue: SelectValue) {
        if (isMulti) {
            searchParams.delete(filterField)

            for (const option of selectValue as Option[]) {
                searchParams.append(filterField, option.value)
            }
        } else {
            searchParams.set(filterField, (selectValue as Option).value)
        }

        setSearchParams(searchParams)
    }

    return (
        <Select
            options={options}
            isMulti={isMulti}
            isSearchable={isSearchable}
            onChange={handleChange}
        />
    )
}

export default FilterSelect
