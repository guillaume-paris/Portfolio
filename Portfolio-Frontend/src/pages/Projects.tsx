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
        <div className="text-white container mx-auto p-10">
            <h1 className="text-white text-5xl font-bold">Projects</h1><br></br>
        </div>
    );
}

export default Projects;