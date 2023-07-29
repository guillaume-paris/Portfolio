import axios from "axios";
import { type } from "os";

const API_URL = process.env.REACT_APP_API_URL;

export interface ProjectResponseDTO {
  title: string;
  description: string;
  img: {
    data: string,
    contentType: string;
  }
}

export class ProjectService {
  async getProjects(): Promise<ProjectResponseDTO[]> {
    try {
      const response = await axios.get(`${API_URL}/api/project/`);
      return response.data;
    } catch (error) {
      console.error("Error while fetching projects:", error);
      throw error;
    }
  }

  async createProject(title: string, description: string, file: File): Promise<void> {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('img', file);

    try {
      await axios.post(`${API_URL}/api/project/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (err: any) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  }
}
