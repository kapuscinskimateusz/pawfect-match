import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { useOpenClose } from '../../hooks/useOpenClose'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import Input from './Input'
import Alert from '../ui/Alert'
import Spinner from '../ui/Spinner'

type Option = { value: string; label: string }

export type SelectValue = Option | Option[]

export interface SelectProps {
    options: Option[]
    value?: SelectValue
    placeholder?: string
    isMulti?: boolean
    isSearchable?: boolean
    isLoading?: boolean
    onChange?: (newValue: SelectValue) => void
}

function Select(props: SelectProps) {
    const {
        options,
        value,
        placeholder = '',
        isMulti = false,
        isSearchable = false,
        isLoading = false,
        onChange,
    } = props

    const [selectedValue, setSelectedValue] = useState(
        value || (isMulti ? [] : null)
    )
    const [searchValue, setSearchValue] = useState('')

    const { isOpen, handleOpen, handleClose } = useOpenClose(false)

    const menuWrapperRef = useOutsideClick(handleClose)
    const searchRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        setSelectedValue(value || (isMulti ? [] : null))
    }, [value, isMulti])

    useEffect(() => {
        setSearchValue('')

        if (isOpen && searchRef.current) {
            searchRef.current.focus()
        }
    }, [isOpen])

    function handleSelect(option: Option) {
        const newValue = isMulti
            ? [...(selectedValue as Option[]), option]
            : option

        setSelectedValue(newValue)

        if (onChange !== undefined) {
            onChange(newValue)
        }

        handleClose()
    }

    function handleRemove(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        option: Option
    ) {
        event.stopPropagation()

        if (!isMulti) return

        const newValue = (selectedValue as Option[]).filter(
            (o) => o.value !== option.value
        )

        setSelectedValue(newValue)

        if (onChange !== undefined) {
            onChange(newValue)
        }
    }

    function handleRemoveAll(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.stopPropagation()

        if (!isMulti) return

        const newValue: Option[] = []

        setSelectedValue(newValue)

        if (onChange !== undefined) {
            onChange(newValue)
        }
    }

    function handleSearch(value: string) {
        setSearchValue(value)
    }

    function isSelected(option: Option) {
        if (isMulti) {
            return (
                (selectedValue as Option[]).findIndex(
                    (o) => o.value === option.value
                ) > -1
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
            return (
                <span className="cursor-default text-gray-300">
                    {placeholder}
                </span>
            )
        }

        if (isMulti) {
            return (
                <div className="flex flex-wrap gap-1.5">
                    {(selectedValue as Option[]).map((option) => (
                        <div
                            key={option.value}
                            className="flex items-center overflow-hidden rounded-md bg-madang-500 text-sm text-madang-950"
                        >
                            <div className="cursor-default px-2.5">
                                {option.label}
                            </div>
                            <button
                                type="button"
                                className="flex h-6 w-6 cursor-default items-center justify-center transition-colors hover:bg-madang-600"
                                onClick={(event) => handleRemove(event, option)}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            <span className="cursor-default">
                {(selectedValue as Option).label}
            </span>
        )
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
        <div className="relative">
            <div
                className={[
                    'flex justify-between overflow-hidden rounded-md border bg-white transition-colors',
                    isOpen
                        ? 'border-madang-800 ring-1 ring-madang-800'
                        : 'border-gray-300 hover:border-madang-700',
                ].join(' ')}
                onClick={handleOpen}
            >
                <div className="flex-grow p-2.5">{getDisplay()}</div>

                <div className="flex items-center">
                    {isLoading && (
                        <div className="p-2.5">
                            <div className="flex h-6 w-6 items-center justify-center">
                                <Spinner size="sm" color="secondary" />
                            </div>
                        </div>
                    )}

                    {!isLoading && isMulti && (
                        <button
                            type="button"
                            className="group cursor-default p-2.5"
                            onClick={(event) => handleRemoveAll(event)}
                        >
                            <div className="flex h-6 w-6 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faClose}
                                    className="text-gray-300 transition-colors group-hover:text-madang-700"
                                />
                            </div>
                        </button>
                    )}

                    <div className="h-6 w-px bg-gray-300"></div>

                    <div className="group p-2.5">
                        <div className="flex h-6 w-6 items-center justify-center">
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={[
                                    'transition-colors',
                                    isOpen
                                        ? 'text-madang-800'
                                        : 'text-gray-300 group-hover:text-madang-700',
                                ].join(' ')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    ref={menuWrapperRef}
                    className="absolute inset-x-0 top-full z-10 mt-1 overflow-hidden rounded-md bg-white shadow-md"
                >
                    {isSearchable && (
                        <div className="p-2.5 shadow">
                            <Input
                                ref={searchRef}
                                icon={<FontAwesomeIcon icon={faSearch} />}
                                onChange={handleSearch}
                            />
                        </div>
                    )}

                    {getOptions().length > 0 ? (
                        <ul className="max-h-80 overflow-y-auto py-1">
                            {getOptions().map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        className={[
                                            'w-full p-2.5 text-left transition-colors',
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
