import { useEffect, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { requestPositions, sendUserData } from '../../store/formReducer';
import { setError } from '../../store/formReducer';
import Form from './Form';


const FormContainer = () => {
    const {name, email, phone, position, positions, loading, success, photo, error} = useAppSelector(state => state.formReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(requestPositions());
    }, [])

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (name.length < 2 || name.length > 60) {
            dispatch(setError({field: 'name', message: 'Length must be between 2 and 60 characters'}));
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            dispatch(setError({field: 'email', message: 'Wrong email form'}));
        }
        if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)) {
            dispatch(setError({field: 'phone', message: 'Wrong phone number form'}));
            return;
        }
        if (photo) {
            dispatch(sendUserData({name, email, phone, position, photo}));
        }
    }

    if (!loading && success) {
        return <Form name={name} email={email} phone={phone} 
                     position={position} positions={positions} 
                     photo={photo} error={error} handleSubmit={handleSubmit}/>
    }else if (loading) {
        return <div>Loading...</div>
    }else if (!loading && !success) {
        return <div>Some error has occured</div>
    }else {
        return <div>Loading...</div>
    }
}

export default FormContainer;