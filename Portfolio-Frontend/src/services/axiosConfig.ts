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

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401 && (error.response.data.message === "No token provided." || error.response.data.message === "Failed to authenticate token.")) {
            localStorage.removeItem("user");
            window.location.reload();
        }
        return Promise.reject(error);
    }
);