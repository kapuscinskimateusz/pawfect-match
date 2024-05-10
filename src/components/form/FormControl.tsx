import { ReactNode } from 'react'

interface FormControlProps {
    children: ReactNode
    label: string
}

function FormControl(props: FormControlProps) {
    const { children, label } = props

    return (
        <div className="flex flex-col gap-1">
            <div className="text-center font-semibold uppercase">{label}</div>
            <div>{children}</div>
        </div>
    )
}

export default FormControl
