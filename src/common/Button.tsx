import { MouseEvent } from "react";


type Props = {
    children: string,
    disabled?: boolean,
    handler?: (e: MouseEvent<HTMLElement>) => void,
}

const Button = ({children, handler, disabled}: Props) => {
    return <button className={`w-[6.25rem] h-[2.125rem] ${disabled ? 'bg-disabled': 'bg-yellow'} rounded-full font-normal text-base`} onClick={handler}>
        {children}
    </button>
}

export default Button;