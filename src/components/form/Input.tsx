import { forwardRef } from 'react'

type Ref = HTMLInputElement

interface InputProps {
    type?: string
    icon?: JSX.Element
    onChange?: (value: string) => void
}

const Input = forwardRef<Ref, InputProps>(function Input(props, ref) {
    const { type = 'text', icon, onChange } = props

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChange === undefined) return

        onChange(event.target.value)
    }

    return (
        <div className="flex items-center justify-between overflow-hidden rounded-md border border-gray-300 bg-white transition-colors hover:border-madang-700">
            <div className="flex-grow p-2.5">
                <input
                    type={type}
                    ref={ref}
                    className="w-full outline-none"
                    onChange={handleChange}
                />
            </div>

            {icon && (
                <div className="p-2.5">
                    <div className="flex h-6 w-6 items-center justify-center text-gray-300">
                        {icon}
                    </div>
                </div>
            )}
        </div>
    )
})

export default Input
