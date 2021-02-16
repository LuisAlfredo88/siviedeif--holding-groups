import axios from 'axios';

// axios.interceptors.request.use((config) => {
//     config.headers.Authorization =  'Bearer ' + API_TOKEN;
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });
export const BASE_URL = process.env.API_URL;

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {params})
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const _delete = (url) => {
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const put = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const patch = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}

export const postFormData = (url, data) => {
    const _formData = new FormData();
    const files = data['file_object'] ? data['file_object'].files : [];

    for(let i = 0; i < files.length; i++){
        _formData.append("file", files[i]);
    }

    for(const d in data) {
        if(d !== 'file_object')
            _formData.append(d, data[d]);
    }

    return axios.post(url, _formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export default {
    get,
    post,
    delete: _delete,
    put,
    patch,
    postFormData
}
