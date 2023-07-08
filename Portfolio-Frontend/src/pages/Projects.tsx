import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Projects = () => {

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/contact');
    }
  }, [isAuthenticated, navigate]);
    
    return (
      <div className="h-screen flex justify-center items-center">
          <div className="text-white p-10">
              <h1 className="text-white text-5xl font-bold">Project</h1>
          </div>
      </div>
    );
}

export default Projects;