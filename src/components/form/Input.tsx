import { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

type Ref = HTMLInputElement

interface InputProps {
    type: 'text'
    onChange?: (value: string) => void
}

const Input = forwardRef<Ref, InputProps>(function Input(props, ref) {
    const { type, onChange = null } = props

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!onChange) return

        onChange(event.target.value)
    }

    return (
        <div className="flex h-10 items-center overflow-hidden rounded-md border bg-white transition-colors hover:border-madang-700">
            <div className="grow px-2.5">
                <input
                    type={type}
                    ref={ref}
                    className="w-full outline-none"
                    onChange={handleChange}
                />
            </div>
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
})

export default Input
