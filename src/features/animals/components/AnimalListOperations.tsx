import FilterSelect from '../../../components/ui/FilterSelect'

const types = [
    { value: 'dog', label: 'Dogs' },
    { value: 'cat', label: 'Cats' },
    { value: 'small-furry', label: 'Small & Furry' },
    { value: 'bird', label: 'Birds' },
    { value: 'scales-fins-other', label: 'Scales, Fins & Other' },
    { value: 'barnyard', label: 'Barnyard' },
    { value: 'rabbit', label: 'Rabbits' },
    { value: 'horse', label: 'Horses' },
]

const breeds = [
    { value: 'pug', label: 'Pug' },
    { value: 'samoyed', label: 'Samoyed' },
]

function AnimalListOperations() {
    return (
        <div className="flex flex-col gap-4">
            <FilterSelect filterField="type" options={types} />
            <FilterSelect
                filterField="breed"
                options={breeds}
                isMulti
                isSearchable
            />
        </div>
    )
}

export default AnimalListOperations
