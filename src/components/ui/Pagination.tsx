import { useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import Button from './Button'

interface PaginationProps {
    count_per_page: number
    total_count: number
    current_page: number
    total_pages: number
}

function Pagination(props: PaginationProps) {
    const {
        count_per_page: countPerPage,
        total_count: totalCount,
        current_page: currentPage,
        total_pages: totalPages,
    } = props

    const [searchParams, setSearchParams] = useSearchParams()

    const from = (currentPage - 1) * countPerPage + 1
    const to = currentPage * countPerPage

    function handlePrevClick() {
        const prev = currentPage === 1 ? currentPage : currentPage - 1

        searchParams.set('page', prev.toString())
        setSearchParams(searchParams)
    }

    function handleNextClick() {
        const next = currentPage === totalPages ? currentPage : currentPage + 1

        searchParams.set('page', next.toString())
        setSearchParams(searchParams)
    }

    return (
        <div className="flex items-center justify-between">
            <p>
                Showing <span className="font-bold">{from}</span> to{' '}
                <span className="font-bold">{to}</span> of{' '}
                <span className="font-bold">{totalCount}</span> results
            </p>

            <div className="flex items-center gap-2">
                <Button
                    isDisabled={currentPage === 1}
                    onClick={handlePrevClick}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                    <span>Previous</span>
                </Button>
                <Button
                    isDisabled={currentPage === totalPages}
                    onClick={handleNextClick}
                >
                    <span>Next</span>
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </Button>
            </div>
        </div>
    )
}

export default Pagination
