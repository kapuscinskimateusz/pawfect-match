import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'

interface AlertProps {
    type: 'info'
    message: string
}

function Alert(props: AlertProps) {
    const { type, message } = props

    const icons = {
        info: <FontAwesomeIcon icon={faInfo} />,
    }

    return (
        <div className="flex items-center gap-3 rounded-md bg-madang-200 p-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-madang-600 text-madang-100">
                {icons[type]}
            </div>
            <p className="text-madang-950">{message}</p>
        </div>
    )
}

export default Alert
