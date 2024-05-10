import { useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { age, gender, sizes } from '../../../data/animals'
import Modal from '../../../components/ui/Modal'
import Button from '../../../components/ui/Button'
import FormControl from '../../../components/form/FormControl'
import FilterType from './FilterType'
import FilterBreed from './FilterBreed'
import FilterSelect from './FilterSelect'

function Filters() {
    const [, setSearchParams] = useSearchParams()

    function handleClearAll() {
        setSearchParams({ type: 'dog' })
    }

    return (
        <>
            <Modal className="lg:hidden">
                <Modal.Open>
                    <Button>
                        <FontAwesomeIcon icon={faFilter} />
                        <span className="ml-2">Filter</span>
                    </Button>
                </Modal.Open>
                <Modal.Window>
                    <div className="grid gap-4">{getFilters()}</div>
                </Modal.Window>
            </Modal>

            <section className="hidden lg:grid lg:gap-4">
                <div className="text-right">
                    <Button variant="outlined" onClick={handleClearAll}>
                        Clear all filters
                    </Button>
                </div>
                {getFilters()}
            </section>
        </>
    )
}

function getFilters() {
    return (
        <>
            <FormControl label="Type">
                <FilterType />
            </FormControl>
            <FormControl label="Breed">
                <FilterBreed />
            </FormControl>
            <FormControl label="Age">
                <FilterSelect
                    filterField="age"
                    options={age}
                    placeholder="Select age..."
                    isMulti
                />
            </FormControl>
            <FormControl label="Size">
                <FilterSelect
                    filterField="size"
                    options={sizes}
                    placeholder="Select size..."
                    isMulti
                />
            </FormControl>
            <FormControl label="Gender">
                <FilterSelect
                    filterField="gender"
                    options={gender}
                    placeholder="Select gender..."
                    isMulti
                />
            </FormControl>
        </>
    )
}

export default Filters
