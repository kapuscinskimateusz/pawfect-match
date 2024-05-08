import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { age, gender, sizes } from '../../../data/animals'
import Modal from '../../../components/ui/Modal'
import Button from '../../../components/ui/Button'
import FilterType from './FilterType'
import FilterBreed from './FilterBreed'
import FilterSelect from './FilterSelect'

function AnimalListOperations() {
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
                    <div className="grid gap-4">
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
                </Modal.Window>
            </Modal>

            <div className="hidden lg:grid lg:gap-4">
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
        </>
    )
}

export default AnimalListOperations
