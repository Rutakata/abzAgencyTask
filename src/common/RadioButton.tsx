import { ChangeEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { Position } from "../store/formReducer"


type Props = {
    position: Position,
    handler: (value: string) => any
}

const RadioButton = ({position, handler}: Props) => {
    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(handler(e.target.value));
    }

    return <div className='flex items-center gap-[0.75rem] mb-[0.438rem]'>
            <input type='radio' value={position.id} id={position.name} name='position' onChange={handleChange} 
            className='w-5 h-5 text-blue' />
            <label htmlFor={position.name}>{position.name}</label>
    </div> 
}

export default RadioButton;