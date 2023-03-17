import { useEffect, MouseEvent, useState, ChangeEvent } from 'react';
import Preloader from '../../common/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { requestPositions, sendUserData } from '../../store/formReducer';
import { setError } from '../../store/formReducer';
import Form from './Form';


const FormContainer = () => {
    const {name, email, phone, position, positions, loading, success, errors} = useAppSelector(state => state.formReducer);
    const [photo, setPhoto] = useState<FormData|string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(requestPositions());
    }, [])

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (name.length < 2 || name.length > 60) {
            dispatch(setError({field: 'name', message: 'Length must be between 2 and 60 characters'}));
        }else {
            dispatch(setError({field: 'name', delete: true}));
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            dispatch(setError({field: 'email', message: 'Wrong email form'}));
        }
        else {
            dispatch(setError({field: 'email', delete: true}));
        }
        if (!/^\+?([0-9]{12})$/.test(phone)) {
            dispatch(setError({field: 'phone', message: 'Wrong phone number form'}));
            return;
        }
        else {
            dispatch(setError({field: 'phone', delete: true}));
        }
        if (photo) {
            console.log('test');
            
            dispatch(sendUserData({name, email, phone, position, photo}));
            dispatch(setError({field: 'phone', delete: true}));
        }
    }

    if (!loading && success) {
        return <Form name={name} email={email} phone={phone} 
                     position={position} positions={positions} 
                     errors={errors} handleSubmit={handleSubmit} setPhoto={setPhoto} />
    }else if (loading) {
        return <div>Loading...</div>
    }else if (!loading && !success) {
        return <div>Some error has occured</div>
    }else {
        return <Preloader />
    }
}

export default FormContainer;