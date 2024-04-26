import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons/faPaw'

function Logo() {
    return (
        <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPaw} />
            <span>PawfectMatch</span>
        </div>
    )
}

export default Logo
