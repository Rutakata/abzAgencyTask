import axios from "axios";


const client = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})


export function getToken() {
    return client.get('token');
}

export function getUsers(page: number) {
    return client.get(`users?page=${page}&count=6`);
}

export function createUser(name: string, email: string, phone: string, position: number, photo: string, token: string) {
    return client.post(`users`, {name, email, phone, position, photo}, {headers: {
        'token': token
    }})
}

export function getPositions() {
    return client.get(`positions`);
}