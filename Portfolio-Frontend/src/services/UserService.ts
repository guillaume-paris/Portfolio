import axios from "axios";
import { AuthService } from "./AuthService";

const API_URL = process.env.REACT_APP_API_URL;

export class UserService {

  async deleteUser(): Promise<any> {
    const response = await axios.delete(`${API_URL}/api/user/delete`);
    
    if (response.status === 200) {
      localStorage.removeItem("user");
    }
    return response;
  }
}