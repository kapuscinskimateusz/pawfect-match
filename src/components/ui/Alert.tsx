import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'

interface AlertProps {
    type: 'info'
    message: string
}

function Alert(props: AlertProps) {
    const { type, message } = props

    const iconClasses = 'text-madang-100'
    const icons = {
        info: <FontAwesomeIcon icon={faInfo} className={iconClasses} />,
    }

    return (
        <div className="flex items-center gap-3 rounded-md bg-madang-200 p-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-madang-600">
                {icons[type]}
            </div>
            <p className="text-madang-950">{message}</p>
        </div>
    )
}

export default Alert
