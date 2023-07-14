import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.token) {
        const token = 'Bearer ' + user.token;
        config.headers.Authorization = token;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});
