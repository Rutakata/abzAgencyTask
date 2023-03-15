import { ChangeEvent } from 'react';
import { useAppDispatch } from '../hooks';


type Props = {
    value?: string,
    help?: string|{field: string, message: string}|null,
    isError: boolean,
    children: string,
    type?: string, 
    handler: (value: string|File) => any
}

const Input = ({value, children, help, type, handler, isError}: Props) => {
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(handler(e.target.files[0]));
        }else {
            dispatch(handler(e.target.value));
        }
    }
    
    const computeHelpMessage = () => {
        if (help && typeof help === 'string') return help
        else if (help && typeof help === 'object') return help.message
    }

    return <div className="w-min mx-auto">
        <input type={type ? type : 'text'} value={value} placeholder={children} onChange={handleChange}
                  className={`w-[20.5rem] h-[3.375rem] text-base border ${isError ? 'border-2 border-error': null} ${type === 'file' ? 'p-0': 'p-3.5'} 
                  placeholder:text-base rounded bg-inherit file:w-[5.188rem] file:mr-4 file:h-full 
                  file:bg-white file:rounded-inherit border content-['Upload your photo']`} accept=".jpg, .jpeg" />
        {help && <p className={`text-xs text-[#7e7e7e] mt-1 ml-4 ${isError ? 'text-error': null}`}>{computeHelpMessage()}</p>}
    </div>
}

export default Input;