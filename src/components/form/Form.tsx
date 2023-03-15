import {MouseEvent, useEffect, useState} from 'react';
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
    photo: File|null,
    positions: Position[],
    errors: {field: string, message: string}[],
    handleSubmit: (e: MouseEvent<HTMLElement>) => void
}

const Form = ({name, email, phone, positions, handleSubmit, errors}: Props) => {
    const [errorFields, setErrorFields] = useState<string[]>([]);
    useEffect(() => {
        setErrorFields(errors.map(error => error.field));
    }, [errors])

    return <div className="mt-[8.75rem] xl:w-[73.125rem] xl:mx-auto">
        <h1 className="text-[2.5rem] text-center sm:leading-10">Working with POST request</h1>
        <form className="mt-[3.125rem] flex flex-col justify-center gap-[3.125rem] w-min mx-auto">
            <Input value={name} 
                   handler={setName} 
                   isError={errorFields.includes('name')} 
                   help={errors.filter(err => err.field === 'name')[0]}>
                Your name
            </Input>
            <Input value={email} 
                   handler={setEmail} 
                   isError={errorFields.includes('email')} 
                   help={errors.filter(err => err.field === 'email')[0]} 
                   type='email'>
                Email
            </Input>
            <Input value={phone} 
                   help={errors.filter(err => err.field === 'phone')[0] || '+38 (XXX)XXX-XX-XX'} 
                   isError={errorFields.includes('phone')} 
                   handler={setPhone}>
                Phone
            </Input>
            <div>
                <h3 className='text-base sm:mb-[0.688rem]'>Select your position</h3>
                <div className='sm:gap-[0.438rem]'>
                    {
                        positions.map((position, index) => <RadioButton isChecked={index === 0 ? true: false} position={position} handler={setPosition} key={position.id} />)
                    }
                </div>
            </div>
            <Input type='file' isError={errorFields.includes('name')} handler={setPhoto}>Upload your photo</Input>
            <div className='w-min mx-auto sm:mb-[6.25rem]'>
                <Button handler={handleSubmit} disabled={errors.length > 0 ? true : false}>Sign Up</Button>
            </div>
        </form>
    </div>
}

export default Form;