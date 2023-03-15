import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../axios/axios';


export type User = {
    id: number,
    name: string, 
    email: string, 
    phone: string,
    position: string,
    position_id: number,
    registration_timestamp: number,
    photo: string
}

type UsersState = {
    loading: boolean,
    success: boolean, 
    total_pages: number|null,
    total_users: number|null,
    count: number, 
    page: number,
    links: {
        next_url: string|null,
        prev_url: string|null
    },
    users: User[],
    error: string|null
}   

const initialState: UsersState = {
    loading: false,
    success: false, 
    total_pages: null,
    total_users: null,
    count: 6, 
    page: 1,
    links: {
        next_url: null,
        prev_url: null
    },
    users: [],
    error: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestUsers.pending, (state: UsersState) => {
                state.loading = true;
            })
            .addCase(requestUsers.fulfilled, (state: UsersState, action) => {
                state.success = action.payload.success;
                state.total_pages = action.payload.total_pages;
                state.total_users = action.payload.total_users;
                state.page = action.payload.page;
                state.links.next_url = action.payload.links.next_url;
                state.links.prev_url = action.payload.links.prev_url;
                state.users = [...state.users, ...action.payload.users];
                state.loading = false;
            })
            .addCase(requestUsers.rejected, (state: UsersState, action) => {
                state.loading = false;
            })
    }
}) 

export const requestUsers = createAsyncThunk('users/requestUsers', async(page: number) => {
    const response = await getUsers(page);
    return response.data;
})


// export const { } = hotelSlice.actions;
export default userSlice.reducer;