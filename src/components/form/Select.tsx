import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { useOpenClose } from '../../hooks/useOpenClose'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import Input from './Input'
import Alert from '../ui/Alert'

type Option = { value: string; label: string }

type SelectedValue = Option | Option[] | null

interface SelectProps {
    options: Option[]
    isMulti?: boolean
    isSearchable?: boolean
}

function Select(props: SelectProps) {
    const { options, isMulti = false, isSearchable = false } = props

    const [selectedValue, setSelectedValue] = useState<SelectedValue>(
        isMulti ? [] : null
    )
    const [searchValue, setSearchValue] = useState('')
    const { isOpen, handleOpen, handleClose } = useOpenClose(false)

    const selectRef = useOutsideClick(handleClose)
    const searchRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        setSearchValue('')

        if (isOpen && searchRef.current) {
            searchRef.current.focus()
        }
    }, [isOpen])

    function handleSelect(option: Option) {
        setSelectedValue((selectedValue) =>
            isMulti ? [...(selectedValue as Option[]), option] : option
        )

        handleClose()
    }

    function handleRemove(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        option: Option
    ) {
        event.stopPropagation()

        setSelectedValue((selectedValue) =>
            isMulti
                ? (selectedValue as Option[]).filter(
                      (o) => o.value !== option.value
                  )
                : null
        )
    }

    function handleSearch(value: string) {
        setSearchValue(value)
    }

    function isSelected(option: Option) {
        if (isMulti) {
            return (
                (selectedValue as Option[]).findIndex(
                    (o) => o.value === option.value
                ) >= 0
            )
        }

        if (selectedValue === null) {
            return false
        }

        return (selectedValue as Option).value === option.value
    }

    function getDisplay() {
        if (
            selectedValue === null ||
            (selectedValue as Option[]).length === 0
        ) {
            return ''
        }

        if (isMulti) {
            return (
                <div className="flex items-center gap-1">
                    {(selectedValue as Option[]).map((option) => (
                        <div
                            key={option.value}
                            className="flex items-center overflow-hidden rounded bg-madang-500"
                        >
                            <div className="cursor-default px-2">
                                {option.label}
                            </div>
                            <button
                                type="button"
                                className="flex h-6 w-6 items-center justify-center transition-colors hover:bg-madang-600"
                                onClick={(event) => handleRemove(event, option)}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                    ))}
                </div>
            )
        }

        return (selectedValue as Option).label
    }

    function getOptions() {
        if (!searchValue) {
            return options
        }

        return options.filter((option) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    return (
        <div ref={selectRef} className="relative">
            <div
                className="flex h-10 items-center justify-between overflow-hidden rounded-md border bg-white transition-colors hover:border-madang-700"
                onClick={handleOpen}
            >
                <div className="px-2.5">{getDisplay()}</div>
                <div className="flex h-10 w-10 items-center justify-center">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>

            {isOpen && (
                <div className="absolute inset-x-0 top-full z-10 mt-1 overflow-hidden rounded-md bg-white shadow-md">
                    {isSearchable && (
                        <div className="p-2.5 shadow">
                            <Input
                                type="text"
                                ref={searchRef}
                                onChange={handleSearch}
                            />
                        </div>
                    )}

                    {getOptions().length !== 0 ? (
                        <ul className="max-h-80 overflow-y-auto py-1">
                            {getOptions().map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        className={[
                                            'h-10 w-full px-2.5 text-left transition-colors',
                                            isSelected(option)
                                                ? 'bg-madang-700 text-madang-50'
                                                : 'hover:bg-madang-600 hover:text-madang-950',
                                        ].join(' ')}
                                        onClick={() =>
                                            isSelected(option)
                                                ? null
                                                : handleSelect(option)
                                        }
                                    >
                                        {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-2.5">
                            <Alert type="info" message="No options" />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Select
