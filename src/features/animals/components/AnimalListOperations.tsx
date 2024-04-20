import Select from '../../../components/form/Select'

const types = [
    { value: '', label: 'All animals' },
    { value: 'cat', label: 'Cats' },
    { value: 'dog', label: 'Dogs' },
    { value: 'rabbit', label: 'Rabbits' },
]

const breeds = [
    { value: '', label: 'All breeds' },
    { value: 'pug', label: 'Pug' },
    { value: 'samoyed', label: 'Samoyed' },
]

function AnimalListOperations() {
    return (
        <div className="flex flex-col gap-4">
            <Select options={types} />
            <Select options={breeds} isMulti isSearchable />
        </div>
    )
}

export default AnimalListOperations
