import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export class AuthService {
    async login(email: string, password: string): Promise<any> {
        const response = await axios.post(`${API_URL}/api/auth/signin`, { email, password });
        if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
    }

    logout(): void {
        localStorage.removeItem("user");
    }

    async register(username: string, email: string, password: string): Promise<any> {
        const response = await axios.post(`${API_URL}/api/auth/signup`, { name: username, email, password });
        if (response.status === 201) {
            const userData = {
                ...response.data,
                name: username
            };
            localStorage.setItem("user", JSON.stringify(userData));
        }
        return response;
    }

    getCurrentUser(): any {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }
}