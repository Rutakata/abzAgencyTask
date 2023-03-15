import { useEffect, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { requestPositions, sendUserData } from '../../store/formReducer';
import Form from './Form';


const FormContainer = () => {
    const {name, email, phone, position, positions, loading, success, photo} = useAppSelector(state => state.formReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(requestPositions());
    }, [])

    const handleSubmit = () => {
        if (photo) dispatch(sendUserData({name, email, phone, position, photo}))
    }

    if (!loading && success) {
        return <Form name={name} email={email} phone={phone} position={position} positions={positions} photo={photo} handleSubmit={handleSubmit}/>
    }else if (loading) {
        return <div>Loading...</div>
    }else if (!loading && !success) {
        return <div>Some error has occured</div>
    }else {
        return <div>Loading...</div>
    }
}

export default FormContainer;