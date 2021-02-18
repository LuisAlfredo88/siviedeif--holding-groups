import { get, BASE_URL } from './api'

const API_URL = BASE_URL + 'api/services';

export const getServiceNames = async () => {
    // return await get(API_URL)
    return await get('https://jsonplaceholder.typicode.com/comments');
}
