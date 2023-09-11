import axios from 'axios';

import { BASE_URL } from '../constants';
import { TUser } from '../types';

axios.defaults.baseURL = BASE_URL;

export async function GetUsers(email: string) {
    return await axios
        .get<TUser[]>('/users?email_like=' + email)
        .then((response) => response.data)
        .catch((error) => error);
}
