import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export interface EditUserDTO {
  name: string;
  gender: string;
  age: number;
  city: string;
  country: string;
  nationality: string;
  description: string;
}


export class UserService {

  async getUser(): Promise<any> {
    const response = await axios.get(`${API_URL}/api/user/get`);
    return response;
  }

  async editUser(newUser: EditUserDTO): Promise<any> {
    const response = await axios.put(`${API_URL}/api/user/edit`, { ...newUser });
    if (response.status === 200) {
      const user = { ...JSON.parse(localStorage.getItem("user") || "{}") };
      const updatedUser = {
        ...user,
        name: newUser.name,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
    return response;
  }

  async deleteUser(): Promise<any> {
    const response = await axios.delete(`${API_URL}/api/user/delete`);
    
    if (response.status === 200) {
      localStorage.removeItem("user");
    }
    return response;
  }
}