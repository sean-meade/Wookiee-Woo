import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

const register = (username, email, password, password2) => {
    return axios.post(API_URL + 'register/', {
        username,
        email,
        password,
        password2
    });
};

const login = (username, password) => {
    return axios.post(API_URL + 'token/', {
        username,
        password
    });
};

const getProfile = (token) => {
    return axios.get(API_URL + 'profile/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export default {
    register,
    login,
    getProfile
};
