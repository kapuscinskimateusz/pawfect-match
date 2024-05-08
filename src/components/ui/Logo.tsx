import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'

function Logo() {
    return (
        <div>
            <FontAwesomeIcon icon={faPaw} size="xl" />
            <span className="ml-2 font-semibold">PawfectMatch</span>
        </div>
    )
}

export default Logo
