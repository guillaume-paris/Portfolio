import { useEffect, useState } from "react";
import { ProjectResponseDTO, ProjectService } from "../../services/ProjectService";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import CardProject from "./CardProject";

const MAX_FILE_SIZE = 524288; // (0.5 MB)
const projectService = new ProjectService();

const Projects = () => {
  const [projects, setProjects] = useState<ProjectResponseDTO[]>([]);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      projectService.createProject(title, description, file)
        .then(() => {
          setTitle("");
          setDescription("");
          setFile(null);
          return projectService.getProjects();
        })
        .then(setProjects)
        .catch(setError);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0].size < MAX_FILE_SIZE) {
      setFile(e.target.files[0]);
      setError("");
    }
    else {
      setError("File is too large!");
    }
  };

  useEffect(() => {
    projectService.getProjects().then(setProjects).catch(setError);
  }, []);

  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
      <span className="text-white text-4xl font-bold p-5 underline-offset-4 underline">Projects</span>
      <div className="grid justify-center grid-cols-2 md:grid-cols-4 gap-5 p-5">
          {projects.map((project, index) => (<CardProject key={index} title={project.title} description={project.description} img={project.img} />))}
      </div>
      <span className="text-white text-4xl font-bold p-5 underline-offset-4 underline">Create Project</span>
      <div className="text-white py-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeHolder="Title" required />
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeHolder="Description" required />
          <div className="flex flex-col">
            <input onChange={(e) => onFileChange(e)} required className="text-md border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" type="file"/>
            {error === "" ? <span className="text-gray-300 text-md">PNG, JPG (MAX. 500kB).</span> : <span className="text-red-500 text-md">{error}</span>}
          </div>
          <Button type="submit" color="blue">Create Project</Button>
        </form>
      </div>
    </div>
  );
}

export default Projects;
