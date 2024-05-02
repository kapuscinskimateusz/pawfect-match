import { useSearchParams } from 'react-router-dom'
import Select, {
    SelectProps,
    SelectValue,
} from '../../../components/form/Select'

interface FilterSelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
    filterField: string
    onChange?: (searchParams: URLSearchParams) => void
}

function FilterSelect(props: FilterSelectProps) {
    const { filterField, onChange, ...selectProps } = props

    const [searchParams, setSearchParams] = useSearchParams()

    const filterValue = selectProps.isMulti
        ? searchParams.getAll(filterField)
        : searchParams.get(filterField)

    const currentSelectValue =
        filterValue instanceof Array
            ? selectProps.options.filter((option) =>
                  filterValue.includes(option.value)
              )
            : selectProps.options.find((option) => option.value === filterValue)

    function handleChange(newValue: SelectValue) {
        if (newValue instanceof Array) {
            searchParams.delete(filterField)

            for (const option of newValue) {
                searchParams.append(filterField, option.value)
            }
        } else {
            searchParams.set(filterField, newValue.value)
        }

        if (onChange !== undefined) {
            onChange(searchParams)
        }

        setSearchParams(searchParams)
    }

    return (
        <Select
            {...selectProps}
            value={currentSelectValue}
            onChange={handleChange}
        />
    )
}

export default FilterSelect
