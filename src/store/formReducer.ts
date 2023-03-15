import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, getPositions, getToken, getUsers } from '../axios/axios';


export type Position = {
    id: number, 
    name: string
}

type FormState = {
    name: string,
    email: string,
    phone: string,
    position: number,
    photo: File|null,
    loading: boolean,
    success: boolean,
    errors: {field: string, message: string, delete?: true}[],
    positions: Position[]
}

const initialState: FormState = {
    name: '',
    email: '',
    phone: '',
    position: 1,
    photo: null,
    loading: false,
    success: false,
    errors: [],
    positions: []
}   

export const formSlice = createSlice({
    name: 'form',
    initialState, 
    reducers: {
        setName(state: FormState, action) {
            state.name = action.payload;
        },
        setEmail(state: FormState, action) {
            state.email = action.payload;
        },
        setPhone(state: FormState, action) {
            state.phone = action.payload;
        },
        setPosition(state: FormState, action) {
            state.position = Number(action.payload);
        },
        setPhoto(state: FormState, action) {
            state.photo = action.payload;
        },
        setError(state: FormState, action) {
            const errorFields = state.errors.map(err => (err.field));
            if (action.payload.delete) {
                state.errors = state.errors.filter(err =>  err.field !== action.payload.field);
            }else {
                if (!errorFields.includes(action.payload.field)) {
                    state.errors.push(action.payload);
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestPositions.pending, (state: FormState, action) => {
                state.loading = true;
            })
            .addCase(requestPositions.fulfilled, (state: FormState, action) => {
                state.success = action.payload.success;
                state.positions = action.payload.positions;
                state.loading = false;
            })
            .addCase(requestPositions.rejected, (state: FormState) => {
                state.loading = false;
            })
            .addCase(sendUserData.pending, (state: FormState) => {
                state.loading = true;
            })
            .addCase(sendUserData.fulfilled, (state: FormState, action) => {
                console.log(action.payload);
                state.loading = false;
            })
            .addCase(sendUserData.rejected, (state: FormState) => {
                state.loading = false;
            })
    }
})


export const requestPositions = createAsyncThunk('form/requestPositions', async() => {
    const response = await getPositions();

    return response.data;
})

type User = {
    name: string, 
    email: string,
    phone: string,
    position: number, 
    photo: File
}

export const sendUserData = createAsyncThunk('form/sendUserData', async({name, email, phone, position, photo}: User) => {
    let response = await getToken();
    response = await createUser(name, email, phone, Number(position), photo, response.data.token);
})

export const {setName, setEmail, setPhone, setPosition, setPhoto, setError} = formSlice.actions;
export default formSlice.reducer;