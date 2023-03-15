import {FormEvent} from 'react';
import Input from "../../common/Input";
import { Position, sendUserData } from "../../store/formReducer";
import { setName, setEmail, setPhone, setPosition, setPhoto } from "../../store/formReducer";
import RadioButton from '../../common/RadioButton';
import Button from '../../common/Button';
import { useAppDispatch } from '../../hooks';


type Props = {
    name: string,
    email: string,
    phone: string,
    position: number,
    photo: null|string,
    positions: Position[],
    handleSubmit: () => void
}

const Form = ({name, email, phone, positions, handleSubmit}: Props) => {
    const dispatch = useAppDispatch();
    

    return <div className="mt-[8.75rem] xl:w-[73.125rem] xl:mx-auto">
        <h1 className="text-[2.5rem] text-center sm:leading-10">Working with POST request</h1>
        <form className="mt-[3.125rem] flex flex-col justify-center gap-[3.125rem] w-min mx-auto">
            {/* <input type='text' className="w-[20.5rem] h-[3.375rem] border border-[#D0CFCF] p-3.5 placeholder:text-base" /> */}
            <Input value={name} handler={setName}>Your name</Input>
            <Input value={email} handler={setEmail} type='email'>Email</Input>
            <Input value={phone} help='+38 (XXX)XXX-XX-XX' handler={setPhone}>Phone</Input>
            <div>
                <h3 className='text-base sm:mb-[0.688rem]'>Select your position</h3>
                <div className='sm:gap-[0.438rem]'>
                    {
                        positions.map(position => <RadioButton position={position} handler={setPosition} key={position.id} />)
                    }
                </div>
            </div>
            <Input type='file' handler={setPhoto}>Upload your photo</Input>
            <div className='w-min mx-auto sm:mb-[6.25rem]'>
                <Button handler={handleSubmit} disabled={true}>Sign Up</Button>
            </div>
        </form>
    </div>
}

export default Form;